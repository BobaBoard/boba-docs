---
sidebar_position: 1
---

# Introduction to APIs

APIs allow different applications to talk to each other without giving them complete access to all the data or operations of the other application. In simple terms, an API is a contract that defines a common language so one application can communicate with another. Most API operations involve fetching, storing, or updating data.

:::note

You can explore the full BobaBackend API on the [REST API documentation page](/docs/engineering/rest-api/).

:::

While there are no enforced rules about how APIs should be defined, BobaBackend's API implements [a special set of API guidelines](https://www.redhat.com/en/topics/api/what-is-a-rest-api) called REST. Following REST principles has several advantages, including easier understanding, definition, and scalability of APIs. You can find more details about the REST principles followed by BobaBackend in the [API guidelines](./API-guidelines) page.

## How a REST API works

REST APIs use the HTTP protocol, which is the same protocol that web browsers use to navigate websites. Specifically, a REST API defines a set of URLs called 'endpoints' that the client (your application) can access to perform operations. A REST API also specifies the format of the data the client needs to send for the operation and the format of the data it will receive in response.

To make requests to a REST API, different [`HTTP methods`](https://www.restapitutorial.com/lessons/httpmethods.html) are used to perform various operations on a specific resource. These methods are associated with a single endpoint each. When the API responds to a request, it uses [`HTTP Status Codes`](https://httpstatuses.com/) to indicate the result of the operation.

Any additional data that needs to be sent or received as part of the request or response is referred to as the request/response payload. In the case of BobaBoard's API, the responses are returned in the [`JSON format`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

:::TODO

Add a quick explanation of different type of request parameters (URL, query and body).

:::

## REST API example {#api-example}

:::caution

The following is a high-level example to help understand how REST APIs work. It does not reflect how BobaBackend works in practice. The source of truth for the BobaBackend API is our [REST API documentation page](/docs/engineering/rest-api/).

:::

As an example, let's define the REST API endpoint that associated with contributions on a thread. This endpoint will live at the `/threads/:thread_id/contributions/:contribution_id` address.

Here are some operations that might be available to the client:

### GET: Fetch the data for a contribution in a thread

The client wants to **fetch** the contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `GET` request to the `/threads/thread_456/contributions/contribution_123` endpoint.

Possible responses include:

- An HTTP Status Code of `200` with a `payload` that contains the contribution data.
- An HTTP Status Code of `404` if the contribution does not exist.
- An HTTP Status Code of `401` if the access requires authentication data and none was found in the request.

:::note

`GET` requests are the default type of request the browser sends when you access a web page.

:::

### POST: Create a new contribution in a thread

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

### PUT: Update a contribution in a thread

The client wants to **update** a contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `PUT` request to the `/threads/thread_456/contributions/contribution_123` endpoint. The `PUT` request would also include the updated contribution data as a `payload`.

Possible responses include:

- An HTTP Status Code of `201` if the contribution was successfully created. This might include a `payload` that contains the finalized contribution data.
- An HTTP Status Code of `403` if the user is not authorized to update the contribution.
- An HTTP Status Code of `404` if the contribution does not exist.

### DELETE: Delete a contribution in a thread

The client wants to **delete** a contribution with id `contribution_123` in the thread with id `thread_456`. To achieve this, the client sends a `DELETE` request to the `/threads/thread_456/contributions/contribution_123` endpoint.

Possible responses include:

- An HTTP Status Code of `204` if the contribution was successfully deleted.
- An HTTP Status Code of `403` if the user is not authorized to delete the contribution.
- An HTTP Status Code of `404` if the contribution does not exist.
