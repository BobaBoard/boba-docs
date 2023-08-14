---
sidebar_position: 4
---

# Install BobaBackend

:::warning

**Make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed.** This is the only codebase that needs it.

:::

## Install Instructions

The first time you work on BobaBackend you'll need to [fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) so you can edit your own version of the code.

### 1 — Clone your fork

In a terminal, run the following commands - or [follow Github's instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository).

```bash showLineNumbers
# Go into the folder where you want to store your boba repositories
# For example:
cd my-boba-repos
# Clone the codebase from github
git clone https://github.com/[YOUR GITHUB USERNAME HERE]/boba-backend.git
# Enter the codebase directory
cd boba-backend
# Install all necessary code
yarn install
```

:::tip

The commands shown on this page use HTTPS to interact with the code on GitHub but you can do so with SSH if you're comfortable

:::

### 2 — Add the BobaBoard repository as a remote

Once you've made your changes to your fork, you'll need some way of pushing the changes to the upstream codebase. To do so, we need to tell git how to find it. Run the following command, or [check out Github's steps](https://docs.github.com/en/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository):

```bash
git remote add upstream https://github.com/BobaBoard/boba-backend.git
```

### 3 — Create configuration files

```bash
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

### 4 — Set up your FirebaseSDK credentials

:::warning

**This is an INVALIDATED Firebase service account key.** It will allow the firebase admin SDK to be correctly initialized, but doesn't grant any further privilege.

:::

Open `firebase-sdk.json` and paste the following content within it:

```json
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

## Start a local server

You can now [follow the instructions](../boba-backend/getting-started) in the bobabackend guide and start your own local server.
