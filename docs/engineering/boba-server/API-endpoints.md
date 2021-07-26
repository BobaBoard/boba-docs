# API endpoints and Routes structure

API endpoints are grouped by the type of resource they refer to (e.g. boards, threads, users). Their naming and structure, which reflects their external URL, should follow the principles defined in our [API guidelines](API-guidelines.md).

## Routes and endpoint structure {#structure}

Each folder under the top-level `server/` directory corresponds to the top-level route in the API which carries the same name and contains at least the following files:

- A `routes.ts` file, which exports an instance of [`Express.Router` ](https://expressjs.com/en/api.html#express.router) and defines the subroutes of the endpoint. This file also contains the [documentation](#documentation) of each subroute in its own JSDoc.
- A `queries.ts` file, which servers as an interface between the route-handling code and the database.
- A `sql/` folder, containing the definition of the SQL queries used by `queries.ts`.
- A `tests/` folder, containing tests for the routes and queries. Each test must have the `.test.ts` extension, and can optionally be grouped by the functionality tested.

The `server/all-routes.ts` govern the connection between endpoints and express server.

## How to Add a New Endpoint

1. Choose which top-level route your endpoint should be nested under. The available routes corresponds to the folders within the `server/` directory.
   - **To create a new Route:**
     1. Create the corresponding folders and files as defined in the [structure](#structure) section. Don't forget to export an [`Express.Router`](https://expressjs.com/en/api.html#express.router) object from `routes.ts`.
     2. Add the new route to `server/all-routes.ts`.
2. Decide which HTTP Method (`GET`, `POST`, `PATCH`, etc.) your endpoint will use, according to the specs defined in our [API guidelines](API-guidelines.md).
3. Add the endpoint to your chosen `routes.ts` file.

### Sample Endpoint Code

The code to add an endpoint is structured the following way:

```javascript
router[HTTPmethod]("relative/path/to/route/", [middlewares], [routeHandler]);
```

For example:

```javascript
/**
 * Documentation goes here
 */
router.post("/:post_id/comment", ensureLoggedIn, async (req, res) => {
    const { post_id } = req.params;
    const {
        contents,
    } = req.body;

    // Route code
    res.status(200).json({ /* data */ })
}
```

Further documentation is available on the [Express website](https://expressjs.com/en/api.html#router.METHOD).

## How to Write Documentation {#documentation}

We use the [OpenAPI 3.1](https://spec.openapis.org/oas/latest.html) spec to document API endpoints. You can learn more about the libraries used and the setup [on this dev.to article](https://dev.to/essentialrandom/documenting-express-rest-apis-with-openapi-and-jsdoc-m68).

The best way to learn to use OpenAPI specifications is to look at existing documentation. If you need a more exhaustive explanation, it's available [on the OpenAPI website](https://swagger.io/docs/specification/paths-and-operations/).

The written documentation will be automatically available [on this same website](/docs/engineering/rest-api/) once the updated server is deployed to production. To test the documentation with your local server, you can start a local instance of [BobaDocs](https://github.com/essential-randomness/bobadocs) with the `yarn run start:api-doc` command.

The generated OpenAPI JSON spec is available at the `/open-api.json` endpoint.

### Endpoint Documentation

Co-located with the endpoint declaration in `routes.ts` through [`swagger-jsdoc`](https://www.npmjs.com/package/swagger-jsdoc). Note that the documentation uses [`YAML syntax`](https://learnxinyminutes.com/docs/yaml/).

```javascript
/**
 * @openapi
 * posts/{postId}/comment:
 *   post:
 *     summary: Add comments to a contribution, optionally nested under another comment.
 *     description: Creates a comment nested under the contribution with id {post_id}.
 *     tags:
 *       - /posts/
 *     parameters:
 *       // ...
 *     requestBody:
 *       description: The details of the comment to post.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             // ..
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
 *               // ..
 */
router.post("/:post_id/comment", ensureLoggedIn, async (req, res) => {
    // Route code
}
```

### Components Documentation

Components are reusable definitions of either data models (e.g. `Contribution`, `Comment`, `Board`), or parameters, or other data types. You can find their documentation on the [OpenAPI Specs website](https://swagger.io/docs/specification/components/). Components are added to our documentation through the [$ref shortcut](https://swagger.io/docs/specification/using-ref/).

Components are located within the `/types/open-api` folder and defined through [`YAML files`](https://learnxinyminutes.com/docs/yaml/).

Example (reusable data model for identity):

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
