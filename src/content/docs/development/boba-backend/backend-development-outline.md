---
title: Backend development overview
sidebar:
  order: 2
---

While every feature is unique, developing on boba backend usually involves changes to one or more of these entities:

- **API endpoints:** the actions the backend makes available to clients.
- **Permissions:** the flags that can be associated to a role to allow users to take specific actions.
- **Database:** the tables and queries used to store and retrieve data from permanent storage.
- **Tests:** the automated checks that ensure code runs (and continues to run) as expected.

This guide explains the main steps required to make changes to each of these. This is not the only order
in which these changes can be tackled, and not all changes will involve all steps.

## API endpoints development

### Feature design phase

At the end of the feature design phase, you should have the following information about any endpoint you need to add or modify:

- **HTTP method and URL (required):** for example, `DELETE threads/:thread_id`

- **HTTP request payload (optional):** the shape of the data sent by the client as part of the request body (most often with `POST` requests).

  Example (from `POST posts/:post_id/contributions`):

  ```ts
  - content (required): string
  - whisper_tags (optional): string[]
  - index_tags (optional): string[]
  - ...
  ```

- **HTTP response codes and payloads (required):** a list of the response codes returned by the endpoint.

  Example (from `POST posts/:post_id/contributions`):

  - **HTTP 200: Contribution created**

    **Payload:** the contribution just created.

    ```ts
      - content: string
      - whisper_tags: string[]
      - index_tags: string[]
      - ...
    ```

  - **HTTP 401: No authenticated user.**
  - **HTTP 403: Unauthorized user.**
  - **HTTP 404: Post not found.**

### Development phase

During the development phase you should:

1. **Identify where the API endpoint should be placed:** see [Routes and Endpoints Structure](docs/development/boba-backend/APIs/creating-endpoints#structure)
2. **Write the endpoint function** (if not already present): at this stage, it will simply throw an [HTTP 501 Not Implemented](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501) error.
3. **Add or modify the endpoint OpenAPI definition:** see [Documenting endpoints](docs/development/boba-backend/APIs/creating-endpoints#documentation).

   :::TODO

   We'll need to figure out how to mark not implemented functions in our OpenAPI spec.

   :::

4. **Generate Zod and TypeScript definition from OpenAPI (if changed):** Run `yarn run open-api:typescript`, and check that the generated types match your expectations.

   :::TODO

   Document this better and then link to the correct page.

   :::

5. **Create a test file:** if no test exists for this endpoint, add it, and test that calling the endpoint correctly returns an HTTP 501 Error.

:::warning

At this stage, endpoint development might be blocked while needed permissions or database queries are created. You can move on to the appropriate sections as needed, and come back once you're unblocked.

:::

6. **Add permissions middleware and update tests:** if the endpoint needs to be gated on special conditions (e.g. the user being logged in
   or a permission existing), add the necessary middleware to the endpoint. See [Checking permissions](docs/development/boba-backend/permissions/check-permissions). <u>Make sure to also update tests</u> to check the correct HTTP status codes are returned.

7. **Use SQL queries and generated Zod types to write and validate the endpoint functionality.** With permission errors taken care of in step 6,
   it's now time to write the actual logic of the endpoint. If you need, you can use [Postman](docs/development/boba-backend/using-postman) to test the endpoint as you develop.

   :::TODO

   Document this better and then link to the correct page.

   :::

8. **Write the final tests:** Make sure that the feature works by writing tests for the endpoint!

## Database development

TODO

## Permissions development

TODO

## Tests development

TODO
