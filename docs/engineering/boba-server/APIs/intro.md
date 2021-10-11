---
sidebar_position: 1
---

# Introduction to APIs

APIs allow applications (clients) to interact with another application (server) without unfettered access to the underlying data, or to the whole set of operations that can be executed on it. In short, an API is a contract defined by the server that establishes a common language that clients can use to communicate with it. Most operations allowed by APIs boil down to fetching, storing or updating data.

:::note

You can explore the full BobaServer API on the [REST API documentation page](/docs/engineering/rest-api/).

:::

While there are no enforced rules about how APIs should be defined, BobaServer's API implements [a special set of API guidelines](https://www.redhat.com/en/topics/api/what-is-a-rest-api) called REST. Among the advantages of adhering to REST principles, is that REST APIs are easier to reason about, define, and scale. You can read about the REST principles followed by BobaServer in the [API guidelines](./API-guidelines) page.

## How a REST API works

REST APIs rely on the HTTP protocol, the same browsers use to navigate most webpages. In particular, a REST API defines a set of `endpoints` (URLs) that the client can access to execute operations. A REST API also defines the semantic of the data the client will send to describe the operation parameters, as well as the one of the data it will receive in response.

For requests, REST APIs rely on [`HTTP methods`](https://www.restapitutorial.com/lessons/httpmethods.html) to execute different operations on the same resource using a single `endpoint` associated with it. For responses, REST APIs rely on [`HTTP Status Codes`](https://httpstatuses.com/) to communicate the result of the operation.

Additional data required as part of the request or response is referred to as the request/response `payload`. BobaBoard's API returns responses in the [`JSON format`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

:::TODO
Add a quick explanation of different type of request parameters (URL, query and body).
:::

## REST API example

:::caution
The following is a high-level example to help understand how REST APIs work. It does not reflect how BobaServer works in practice. The source of truth for the BobaServer API is our [REST API documentation page](/docs/engineering/rest-api/).

:::

As an example, let's define the REST API endpoint that associated with contributions on a thread. This endpoint will live at the `/threads/:thread_id/contributions/:contribution_id` address.

Here are some operations that might be available to the client:

### Fetch the data for a contribution in a thread

The client wants to **fetch** the contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `GET` request to the `/threads/thread_456/contributions/contribution_123` endpoint.

Possible responses include:

- An HTTP Status Code of `200` with a `payload` that contains the contribution data.
- An HTTP Status Code of `404` if the contribution does not exist.
- An HTTP Status Code of `401` if the access requires authentication data and none was found in the request.

:::note

`GET` requests are the default type of request the browser sends when you access a web page.
:::

### Create a new contribution in a thread

The client wants to **create** a contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `POST` request to the `/threads/thread_456/contributions/contribution_123` endpoint. The `POST` request would also include the contribution data as a `payload`.

:::caution
In practice, the contribution id would likely be determined by the server when creating the contribution. In this case, the `POST` request would be sent to the `/threads/thread_456/contributions/` endpoint instead, and the assigned contribution id would be returned as part of the response `payload`.
:::

Possible responses include:

- An HTTP Status Code of `201` if the contribution was successfully created. This might include a `payload` that contains the finalized contribution data.
- An HTTP Status Code of `401` if creating the contribution requires authentication data and none was found in the request.
- An HTTP Status Code of `409` if a contribution with the given id already exists.

:::note

`POST` requests are most often used by browsers when submitting forms.
:::

### Update a contribution in a thread

The client wants to **update** a contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `PUT` request to the `/threads/thread_456/contributions/contribution_123` endpoint. The `PUT` request would also include the updated contribution data as a `payload`.

Possible responses include:

- An HTTP Status Code of `201` if the contribution was successfully created. This might include a `payload` that contains the finalized contribution data.
- An HTTP Status Code of `403` if the user is not authorized to update the contribution.
- An HTTP Status Code of `404` if the contribution does not exist.

### Delete a contribution in a thread

The client wants to **delete** a contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `DELETE` request to the `/threads/thread_456/contributions/contribution_123` endpoint.

Possible responses include:

- An HTTP Status Code of `204` if the contribution was successfully deleted.
- An HTTP Status Code of `403` if the user is not authorized to delete the contribution.
- An HTTP Status Code of `404` if the contribution does not exist.
