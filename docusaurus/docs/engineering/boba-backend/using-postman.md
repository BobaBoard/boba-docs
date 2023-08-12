# Using Postman

You can send complex HTTP requests to the backend server using the [Postman API client](https://www.postman.com/product/api-client/). You can [download Postman here](https://www.postman.com/downloads/).

To send a request through Postman, you can follow their ["Sending your first request"](https://learning.postman.com/docs/getting-started/sending-the-first-request/) tutorial.
A sample BobaBoard URL to use is `http://localhost:4200/realms/slug/twisted-minds` with the `GET` HTTP method.

You can find all the BobaBoard REST API endpoints in our [Rest API documentation](/docs/engineering/rest-api/).

:::important

When using Postman, make sure that the HTTP method in the request corresponds to the one required by the API.

:::

### How to authenticate Postman requests

Some requests to the BobaBoard API require authentication.

API endpoints that require authentication have "`firebase`" listed under the `AUTHORIZATIONS` section in their documentation. They will also return `401` or `403` errors if accessed by an unauthenticated user.

#### Initial Setup

Before authenticating Postman requests, you will need to set up a Postman environment.

1. Follow the ["variables in Postman"](https://www.javatpoint.com/variables-in-postman) guide to set up a Postman environment.
2. Set up a `email` variable in your environment with your BobaBoard login email
3. Set up a `password` variable in your environment with your BobaBoard login password
4. Set up a `firebaseApiKey` variable in your environment with value `AIzaSyAYgQGhDsBS6rDKu8PVq_sAQrxt4tIrGEI`

   :::info

   Firebase API keys are designed to be used client-side and are not used to control access to backend resources. You can learn more on the [Firebase API documentation website](https://firebase.google.com/docs/projects/api-keys).
   
	 :::
5. Create (and save) the following **Authentication HTTP Request**

   - **Method:** `POST`
   - **URL:**
     ```
     https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key={{firebaseApiKey}}
     ```
   - **Body**:

     ```javascript
     {
         "email": "{{email}}",
         "password": "{{password}}",
         "returnSecureToken": true
     }
     ```

     Format: `raw/JSON`

   - **Tests:**

     This is the "Tests" tab in the postman request menu, near the Body one at the previous step.

     ```javascript
     postman.setEnvironmentVariable("authToken", pm.response.json().idToken);
     ```

#### Authenticating Requests

1. Run the **Authentication HTTP Request** request set up in the previous step. A successful response will contain an "`idToken`" section with a very long string.
2. Go to the request you want to authenticate.
3. Under the **Headers** tab, add a row with the following:
   - **Key:** `Authorization`
   - **Value:** `{{authToken}}`

Your request should now have the correct authorization header.

:::tip

Your authentication token will expire after an hour. You will need to reauthenticate again after that by sending another **Authentication HTTP Request**.

:::
