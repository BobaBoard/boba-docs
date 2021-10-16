---
sidebar_position: 2
---

# How to work with endpoints

An API `endpoint` is a URL clients can request to execute operations. Following REST principles, BobaBoard's server endpoints are grouped by the type of resource they refer to (e.g. boards, threads, users). Their naming and structure, which reflects their external URL, should follow the principles defined in our [API guidelines](API-guidelines).

:::note
The same endpoint can be called with different HTTP methods, each of which corresponds (when defined) to a different operation on the associated resources.

You can learn more in our [intro to APIs](./API-guidelines.md).
:::

## Routes and endpoint structure {#structure}

Each subfolder in the [`server/` directory](https://github.com/essential-randomness/bobaserver/tree/master/server) defines the endpoints associated with the corresponding resource (e.g. boards, threads, users). For example, files in the `server/boards/` directory define the endpoints at the `[server_adress]/boards/*` URLs. In Express, the server framework BobaBoard uses, endpoints are defined through [Routes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#routes_primer).

Each subfolder in the `server/` directory contains at least the following files:

- A `routes.ts` file, which exports an instance of [`Express.Router` ](https://expressjs.com/en/api.html#express.router) and defines the subroutes of the endpoint. This file also contains the [documentation](#documentation) of each subroute in its own JSDoc.
- A `queries.ts` file, which contains methods acting as an interface between the route-handling code and the database.
- A `sql/` folder, containing the definition of the SQL queries used by `queries.ts`.
- A `tests/` folder, containing tests for the routes and queries. You can read more about defining tests in our [testing endpoints guide](./testing-endpoints.md).
- A `examples/` folder (optional), containing examples used within our REST API documentation (see the [adding examples](#adding-examples) section)

The `server/all-routes.ts` file associates the routers exported by the `routes.ts` files with the corresponding root paths.

## Adding a new endpoint

:::tip
A more general explanation of Express routing is available [on MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#routes_primer).
:::

1. Locate the `routes.ts` file corresponding to the resource you want to add an endpoint to. It will be contained within the `server/[resource_name]` directory.

   :::note
   If you're adding a new top-level route, follow the instruction in the [creating a new top-level route](./creating-endpoints.md#top-level-route) section.
   :::

2. Decide which HTTP Method (`GET`, `POST`, `PATCH`, etc.) your endpoint will use. The [REST API example](./intro.md#api-example) includes examples of different methods and their semantic. You can also consult the [Zalando API guidelines](https://opensource.zalando.com/restful-api-guidelines/#148) for an in-depth explanation.
3. Add the endpoint to your chosen `routes.ts` file by calling the corresponding method on the `router` variable. You can find the documentation for Express Router on the [Express documentation website](https://expressjs.com/en/api.html#router.METHOD).

### Routes structure

Each route follows the same general structure:

```javascript
router.HTTP_METHOD("relative/path/to/route/", [middlewares], [routeHandler]);
```

:::tip
An express middleware is a function that runs before `routeHandler` is executed. You can read more about middlewares on the [Express documentation website](https://expressjs.com/en/guide/using-middleware.html).
:::

For example, the following code, contained within the `server/posts/routes.ts` file, defines the `/posts/:post_id/comment` endpoint:

```javascript
/**
 * Documentation goes here
 */
router.post("/:post_id/comment", ensureLoggedIn, async (req, res) => {
    // The post_id variable will contain the id of the post the endpoint corresponds to
    const { post_id } = req.params;
    // The contents variable is extracted from the body of the request
    const { contents } = req.body;

    // ...
    // Route logic
    // ...

    // Send data to the client within a successful response (HTTP Status 200)
    res.status(200).json({ /* data */ })
}
```

:::warning
Each endpoint should be documented and tested.
:::

### Creating a new top-level route {#top-level-route}

1. Create the corresponding folders and files as defined in the [structure](#structure) section. Don't forget to export an [`Express.Router`](https://expressjs.com/en/api.html#express.router) object from `routes.ts`. Here is a minimal example:

   ```javascript
   import express from "express";
   const router = express.Router();

   router.get("/", async (req, res) => {
     res.status(200).json({ message: "Hello world" });
   });

   export default router;
   ```

2. Add the new router to `server/all-routes.ts`. Example:

   ```javascript
   import NewEndpointRoute from "./new_endpoint/routes";

   const ROUTES: { [key: string]: Router } = {
     // ...other routes
     new_endpoint: NewEndpointRoute,
   };
   ```

## Documenting endpoints {#documentation}

We use the [OpenAPI 3.1](https://spec.openapis.org/oas/latest.html) spec to document API endpoints.

:::tip
You can learn more about the libraries used and the setup [on this dev.to article](https://dev.to/essentialrandom/documenting-express-rest-apis-with-openapi-and-jsdoc-m68).
:::

OpenAPI specifications are best learned by looking at existing documentation. If you need more exhaustive explanations (or have doubts), documentation is available [on the OpenAPI website](https://swagger.io/docs/specification/paths-and-operations/).

During development, you can preview your documentation by opening `http://localhost:4200/api-docs/` in your browser. Oce the updated server is deployed to production, the documentation will be automatically available [on this same website](/docs/engineering/rest-api/).

The generated OpenAPI JSON spec is available at the `/open-api.json` endpoint.

### Endpoint Documentation

The documentation of each endpoint is co-located with the endpoint declaration in the`routes.ts` file, using the [`swagger-jsdoc`](https://www.npmjs.com/package/swagger-jsdoc) library. Note that the documentation uses [`YAML syntax`](https://learnxinyminutes.com/docs/yaml/).

Quick inline explanations of the various parts of the documentation can be found looking for `<- ALL CAPS EXPLANATION` within the following example:

```javascript
/**
 * @openapi
 * /posts/{post_id}/comment: <- THE ENDPOINT WE'RE DOCUMENTING
 *   post: <- THE HTTP METHOD ASSOCIATED WITH THE ENDPOINT
 *     summary: Add comments to a contribution, optionally nested under another comment.
 *     description: Creates a comment nested under the contribution with id {post_id}.
 *     tags: <- USED BY THE DOCUMENTATION TO GROUP ENDPOINTS
 *       - /posts/
 *     security:
 *       - firebase: [] <- INDICATES THAT THE ENDPOINT NEEDS AUTHENTICATION
 *     parameters:
 *       - name: post_id <- DEFINES THE SEMANTIC OF THE post_id PARAMETER
 *         in: path <- THE post_id PARAMETER IS WITHIN THE ENDPOINT URL
 *         description: The uuid of the contribution to reply to.
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody: <- DEFINES THE CONTENT OF THE BODY IN POST REQUESTS
 *       description: The details of the comment to post.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf: <- ALL THE FOLLOWING PROPERTIES ARE REQUIRED
 *               - type: object
 *                 properties:
 *                   contents: <- AN ARRAY OF ITEMS SHAPED LIKE THE Comment COMPONENT
 *                     type: array
 *                     items:
 *                       $ref: "#/components/schemas/Comment"
 *                   reply_to_comment_id: <- THE ID OF THE COMMENT THIS COMMENT IS IN REPLY TO
 *                     nullable: true
 *                     type: string
 *                     format: uuid
 *               - $ref: "#/components/schemas/IdentityParams" <- ALL THE PROPERTIES WITHIN THE IdentityParams COMPONENT
 *     responses:
 *       401:
 *         description: User was not found in request that requires authentication.
 *       403:
 *         description: User is not authorized to perform the action.
 *       200:
 *         description: The comments were successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 comments: <- A SUCCESSFUL RESPONSE WILL BE AN OBJECT WITH A comments FIELD SHAPED LIKE AN ARRAY OF Comment
 *                   description: Finalized details of the comments just posted.
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Comment"
 */
router.post("/:post_id/comment", ensureLoggedIn, async (req, res) => {
    // Route code
}
```

As you can see in the example, components are referred to through the `$ref` attribute. You can learn more about components in the [documenting components](./creating-endpoints.md#documenting-components) section.

### Documenting components

Components are reusable definitions of either data models (e.g. `Contribution`, `Comment`, `Board`), parameters, or other data types. You can find their documentation on the [OpenAPI Specs website](https://swagger.io/docs/specification/components/). Components are added to the documentation through the [$ref shortcut](https://swagger.io/docs/specification/using-ref/).

Components are located within the `/types/open-api` folder, and defined through [`YAML files`](https://learnxinyminutes.com/docs/yaml/).

For example, this component defines a reusable data model for identity. It can be found under `/types/open-api/identity.yaml`:

```yaml
components:
  schemas:
    Identity:
      type: object
      properties:
        name:
          type: string
        avatar:
          type: string
          format: uri
      required:
        - name
        - avatar
    SecretIdentity:
      type: object
      properties:
        name:
          type: string
        avatar:
          type: string
          format: uri
        color:
          type: string
        accessory:
          type: string
          format: uri
      required:
        - name
        - avatar
```

Other documentation can refer to these components by using the `$ref: "#/components/schemas/Identity"` and `$ref: "#/components/schemas/SecretIdentity"` constructs.

### Adding examples

:::TODO
This section is incomplete. Ask Ms. Boba to fill it out!
:::
