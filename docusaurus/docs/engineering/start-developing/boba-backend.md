---
sidebar_position: 4
---

# Install BobaBackend

:::important
**Make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed.** This is the only codebase that needs it.
:::

## Install Instructions

The first time you work on BobaBackend you need to copy the project to the local machine and set up the environment configuration files (`.env`, [ELI5](https://www.reddit.com/r/webdev/comments/a54pxr/what_is_a_env_file/ebjwbtr/?utm_source=reddit&utm_medium=web2x&context=3)).

### 1 – Clone project and copy configuration files

In a terminal, run the following commands:

```bash   showLineNumbers
# Clone the codebase from github
git clone https://github.com/BobaBoard/boba-backend.git

# Enter the codebase directory
cd boba-backend

# Install all necessary code
yarn install

# Create the .env file and firebase-sdk.json file needed to work with the test database
yarn run setup-env
```

The `setup-env` script will copy the necessary information from the `.env-setup` directory to `.env` and `firebase-sdk.json` files. You can also do this manually if you prefer.

:::warning
**The key in `firebase-sdk.json` is an INVALIDATED Firebase service account key.** It will allow the firebase admin SDK to be correctly initialized, but doesn't grant any further privilege.
:::

## Start a local server

You can now [follow the instructions](/docs/engineering/boba-backend/getting-started) in the bobabackend guide and start your own local server.
