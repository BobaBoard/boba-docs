---
sidebar_position: 1
---

# Introduction to APIs

Application Programming Interfaces (APIs) allow applications (clients) to request data or actions from other applications (servers), without being given full access to all the data and actions that exists on those servers.

![Example of client/server HTTP request/response exchange](./client-server.excalidraw)

In short, **a server's API defines the language ("contract") that client applications must use to communicate with it**. Most API operations involve fetching, storing, or updating data.

While there are very few restrictions on how APIs can be defined, BobaBackend's API follows [a special set of API guidelines](https://www.redhat.com/en/topics/api/what-is-a-rest-api) called REST. **REST APIs allow clients to communicate with a server by "visting" addresses (URLs) that represent specific resources**, similar to how browsers access different web pages through their addresses.

Following REST principles has several advantages, including easier understanding, definition, and scalability of APIs. You can find more details about the REST principles followed by BobaBackend in the [API guidelines](./API-guidelines) page.

:::tip

You can explore the full BobaBackend API on the [REST API documentation page](/docs/engineering/rest-api/).

:::

## How a REST API works

REST APIs use the HTTP protocol, which is the same protocol web browsers use to navigate websites. Specifically, a REST API defines a set of URLs called 'endpoints' that a client (your application) can "visit" to perform operations or request data.

A REST API also specifies the format of the data the client needs to send for the operation and the format of the data it will receive in response.

:::tip

When running `boba-backend` locally, you can send an API request and see an example of an
API response by opening your browser and going to the [`http://localhost:4200/realms/slug/twisted-minds`](http://localhost:4200/realms/slug/twisted-minds) URL.

<details>
<summary>Detailed breakdown</summary>

Request details:

- **Server base address:** `http://localhost:4200`
- **API endpoint:** `realms/slug/[:realm_slug]`
- **HTTP Request method:** `GET` (browsers' default)
- **HTTP Request URL parameters:** `{ realm_slug: "twisted-minds" }`

Response details (assuming success):

- **HTTP Response status code:** [200 (success)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
- **HTTP Response payload:** what you see in the browser
- **HTTP Response type:** [See endpoint documentation](/docs/engineering/rest-api/#tag/realms/operation/getRealmsBySlug)

</details>

:::

When a client makes a request to a REST API, it uses different [`HTTP methods`](https://www.restapitutorial.com/lessons/httpmethods.html) to perform specific operations on the resource associated with an endpoint. When the server responds to a request, it uses [`HTTP Status Codes`](https://httpstatuses.com/) to indicate whether the operation was successful and its result, if any.

Any additional data that needs to be sent or received as part of the request or response is referred to as the request/response payload. In the case of BobaBoard's API, the responses are returned in the [`JSON format`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

:::TODO

Add a quick explanation of different type of request parameters (URL, query and body).

:::

## REST API example {#api-example}

:::danger

**The following examples do not reflect how BobaBackend works in practice**, and are just meant to help understand REST APIs.

The source of truth for the BobaBackend API is our [REST API documentation page](/docs/engineering/rest-api/).

:::

As an example, let's define the REST API endpoint that associated with contributions on a thread. This endpoint will live at the `/threads/:thread_id/contributions/:contribution_id` address, and support the following operations:

- **GET:** fetch the contribution data
- **POST:** create a new contribution
- **PUT:** update the contribution
- **DELETE:** delete the contribution

Remember that endpoints often accept only a subset of these operations. Make sure to check the documentation of the APIs you're using before sending requests!

:::tip

For a refresher on HTTP Status codes, [MDN is your friend](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)!

:::

### GET: Fetch the data for a contribution in a thread

The client wants to **fetch** the contribution with id `contribution_123` in the thread with id `thread_456`.

To do this, the client sends the following request:

- **Endpoint:** `/threads/thread_456/contributions/contribution_123`
- **HTTP Method:** `GET`

Possible responses include:

- **Success (ok):** An HTTP Status Code of `200` with a `payload` that contains the contribution data.
- **Not found:** An HTTP Status Code of `404` if the contribution does not exist.
- **Authentication needed:** An HTTP Status Code of `401` if the access requires authentication data and none was found in the request.

:::tip

`GET` requests are the default type of request the browser sends when you access a web page. This means you can access `GET` endpoints through your browsers!

:::

### POST: Create a new contribution in a thread

The client wants to **create** a contribution with id `contribution_123` in the thread with id `thread_456`.

:::caution Contrived example

In practice, the new contribution id is generated by the server! Take this example with a grain of salt as it oversimplifies things.

<details>
<summary>How it actually works</summary>

The client sends a `POST` request to the `/threads/thread_456/contributions/` endpoint, without specifying the id.

When the contribution is created, the server assigns the contribution id. This id is returned to the client as part of the response `payload`. The client can then use that id to request further actions on that contribution.

</details>

:::

To do this, the client sends the following request:

- **Endpoint:** `/threads/thread_456/contributions/contribution_123`
- **HTTP Method:** `POST`
- **Payload:** The content of the contribution in the format specified by the server.

Possible responses include:

- **Success (created):** An HTTP Status Code of `201` if the contribution was successfully created. This might include a `payload` that contains the finalized contribution data.
- **Authentication needed:** An HTTP Status Code of `401` if creating the contribution requires authentication data and none was found in the request.
- **Conflict:** An HTTP Status Code of `409` if a contribution with the given id already exists.

:::tip

`POST` requests are often used by browsers when submitting forms.

:::

### PUT: Update a contribution in a thread

The client wants to **update** a contribution with id `contribution_123` in the thread with id `thread_456`.

To do this, the client sends the following request:

- **Endpoint:** `/threads/thread_456/contributions/contribution_123`
- **HTTP Method:** `PUT`
- **Payload:** The content of the updated contribution in the format specified by the server.

Possible responses include:

- **Success:** An HTTP Status Code of `201` if the contribution was successfully updated. This might include a `payload` that contains the finalized contribution data.
- **Authentication needed:** An HTTP Status Code of `401` if updating the contribution requires authentication data and none was found in the request.
- **Invalid authentication:** An HTTP Status Code of `403` if the authenticated user is not authorized to update the contribution.
- **Not found:** An HTTP Status Code of `404` if the contribution does not exist.

:::tip

`PUT` requests are not easily accessible through browsers! To issue one, you can
use a tool like [Postman](docs/engineering/boba-backend/using-postman) or write a test for your endpoint.

:::

### DELETE: Delete a contribution in a thread

The client wants to **delete** a contribution with id `contribution_123` in the thread with id `thread_456`.

To do this, the client sends the following request:

- **Endpoint:** `/threads/thread_456/contributions/contribution_123`
- **HTTP Method:** `DELETE`
- **Payload:** None

Possible responses include:

- **Success (no content):** An HTTP Status Code of `204` if the contribution was successfully deleted.
- **Invalid authentication:** An HTTP Status Code of `403` if the user is not authorized to delete the contribution.
- **Not found:** An HTTP Status Code of `404` if the contribution does not exist.

:::tip

`DELETE` requests are not easily accessible through browsers! To issue one, you can
use a tool like [Postman](docs/engineering/boba-backend/using-postman) or write a test for your endpoint.

:::
