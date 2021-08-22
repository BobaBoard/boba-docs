---
sidebar_position: 1
---

# Getting Started

:::warning
This is currently a private repository. Contact the BobaLord for access!
:::

:::important
**Make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed.** This is the only codebase that needs it.
:::

:::important
**Make sure you have [Redis](https://redis.io/) installed.** This is the only codebase that needs it.
:::

## First-time setup

The first time you work on BobaServer you need to copy the project to the local machine and set up the environment configuration files (`.env`, [ELI5](https://www.reddit.com/r/webdev/comments/a54pxr/what_is_a_env_file/ebjwbtr/?utm_source=reddit&utm_medium=web2x&context=3)).

### 1 – Clone project and create configuration files

```
git clone https://github.com/essential-randomness/bobaserver.git
cd bobaserver
yarn install
# Create the .env files containing the secrets for our test DB
touch .env
echo "POSTGRES_USER=the_amazing_bobaboard" >> .env
echo "POSTGRES_PASSWORD=how_secure_can_this_db_be" >> .env
echo "POSTGRES_DB=bobaboard_test" >> .env
echo "POSTGRES_PORT=35432" >> .env
echo "GOOGLE_APPLICATION_CREDENTIALS_PATH=../firebase-sdk.json" >> .env
echo "FORCED_USER=c6HimTlg2RhVH3fC1psXZORdLcx2" >> .env
echo "REDIS_HOST=localhost" >> .env
echo "REDIS_PORT=6379" >> .env
# Create the firebase-sdk config file to connect to the authentication service
touch firebase-sdk.json
```

### 2 — Set up your FirebaseSDK credentials.

:::warning
**This is an INVALIDATED Firebase service account key.** It will allow the firebase admin SDK to be correctly set up, but doesn't grant any further privilege.
:::

Open `firebase-sdk.json` and paste the following content within it:

```
{
  "type": "service_account",
  "project_id": "bobaboard-fb",
  "private_key_id": "18e2b61135293698046acc15e63ea001fa58d2ca",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDcOLtfjPh6OXgS\nt4zBMiFc7bTk9mpx9r3LoyeznlQthvX2pKX6ahehWrJCrRtcgPmIlKLAzrG4dm3p\nWB0p6koF6VVY6Fjo16sOw2BKevWCk7Lhf/Dr5BV9622VykBIobKAjHDReW4P0EcK\ne77Dmk5T+bJz3hCJjN+CTxO/gbPojmFUP5MhDz/u5iihMwXZ3NLmsrjZy5EreTRD\nYcFesIiWE2mWpw4WBpJd8G0bWxt6EhdD05tca55JtPfxW5awSt6udoWx3/CfhV2R\n2kJ5yBbFKLY/lvVr4vvwu5Yxp3tNGdZpLAMTUYMz6xuCgqWteyeHS4h2e/V4ohOe\ns63hoo79AgMBAAECggEAJazfAX3QlLh4PluAjRzScF+KbxFpLI4V8ly7UhNoO1G3\niraoXqr/1+74SEftQmoeRquHHI1AAlrgeudENgOLHm/I1ikJ7OvYq/Ho61UV43z5\nQXLt+K1Qr/YzDUlIriRbsXpVYsDvf20WekipXjVr6Rny2bfIBIBBTL3SlxTNfp9r\n7XRLXQNkqssFW2sILKvlRYPy9bxWXVpBilPYVptowj1hkitKOezYd/JBX8NAej9V\nx25kBR9b29E5Xcc0ERMMGlUUGwvJE3inMchfNSy3f7X+wd8ck7Amellc/IpEFyHH\n721wes/buvqv9cNyHKOqvOE7rojH4CVW2LrJi0kRUQKBgQDx/2F0O0uza4I9yw8K\nOJUTCqqhDJLCulOgyNflZ7ATBBNGrxcfnDcS1flyNr+9dLhRK0K8vuLe3nuvCqHF\nNL1+GTGxM+T/zFlfY8bDmTFNbk3eEkiCyzRJFkEijuzQBDuMyRj5aonkCK9RC0Ua\nL3nNKBKEsk3X1eEhWHx6kxJyqwKBgQDo9sq9avPTD90zeuRtEcxROczmWm9rfgKf\nJ9pCv0u68aqQVDnjlGiySvwn33pkMnjqv2xZjsC2B9TLQMPSkn8aUXl44nJOo3Ut\n4+zucrhKGxcoXk7wmaIjCrRe3DF518IWc9bC9q1aDt2nM6tTx02g3eYqOMyFAD+l\nJNe1OSHE9wKBgQDetxVenm/GGYyNCEO4OWjhVHDCtUqgUlFC6XTg2TOP3LFM3Tlf\nyypYeHsRZVfDqhc0BKdwBBHR4VpdN2C4mRhIZDF6j3MTBGPASZiVTXi1dW3Okm8P\niKp/FS8u+fDyZOLVaAJHEYkESAXphYC8X7MuX9HjNCI2IM4IHWK6gH567wKBgHU/\ngFpE8eJQIaw/NagPRR28UXu+GEWpbfhcPmVJkfvMlWN+gIQhtW/GfZIzz42OOX0s\nSoPobOUwm9CQD/5y7LV6PACzN4SMj/VAuYZpBoeFiuouTNya9hdc09rKR7xi8rQK\nKRSGwkiJItV8E8ZekJteEvE9FPH7ZgzfthDnaC+RAoGAEQHfNQh6gsKQBIo5h1fr\nZJSa/TlfVIEnXpjl1200GsinqMGlnDAIOaTBJWQQdsxukvA9ZE5yPewkkEIaWMjN\nZOTcyWkjbEIQy9qJXSrVvolsxDWH8lH+RjD72TcnA9+bA1+qSYr9J4ubqUMt/BpA\nyCAcQzOEErHcBSIvtTzUFA8=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-testing-restricted@bobaboard-fb.iam.gserviceaccount.com",
  "client_id": "102143597368847983009",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-testing-restricted%40bobaboard-fb.iam.gserviceaccount.com"
}
```

## Run local server

### Start DB

```
yarn run start-db
```

### Start cache

```
redis-server
```

### Run development server

```
yarn run dev:watch
```

:::tip
**The above command will automatically restart the server on any code change you make. **
For some edits, like updates to .sql files, you might need to restart it manually.

<details>
<summary><strong>How to manually restart the development server</strong>
</summary>

Both of these actions need to be performed on the console where `yarn run dev:watch` is currently running.

- **Fancy Way:** Type `rs` and press enter.
- **Bruteforce Way:** ~~Press~~ Mash `ctrl+c` to stop the running process, then run `yarn run dev:watch` again.

</details>

:::

You can test the server is running by opening `http://localhost:4200/realms/slug/v0` in any browser. You should now see a list of all the realm properties in [JSON format](https://developers.squarespace.com/what-is-json).

:::tip
Accessing a URL through a browser is equivalent to making a GET request to the same URL through [Postman](#how-to-use-postman).
:::

### Run tests

You can run tests by using the `yarn run test:watch` command.

:::important
Tests will fail if the currently-running database has been modified from its initial state. Before running tests, stop and restart the database.
:::

You can test the backend in two ways: **with [Postman](https://www.postman.com/downloads/)**, which helps you send requests directly to the server, or by running BobaFrontend with `yarn run dev`.

## How to use Postman

You can send complex HTTP requests to the backend server using the [Postman API client](https://www.postman.com/product/api-client/).

To send a request through Postman, you can follow their ["Sending your first request"](https://learning.postman.com/docs/getting-started/sending-the-first-request/) tutorial.
A sample BobaBoard URL to use is `http://localhost:4200/boards` with the `GET` HTTP method.

You can find all the BobaBoard REST API endpoints in our [Rest API documentation](http://localhost:3000/docs/engineering/rest-api/).

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
