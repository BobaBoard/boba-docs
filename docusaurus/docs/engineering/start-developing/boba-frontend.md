---
sidebar_position: 5
---

# Install BobaFrontend

:::warning
This codebase requires Node **18**. If you're using [Node Version Manager](https://github.com/nvm-sh/nvm), you can switch to version 18 by running `nvm use 18` in your terminal.

You can check the current Node version by running `node -v`.
:::

## Clone project

In a terminal, run the following commands:

```bash showLineNumbers
# Clone the codebase from github
git clone https://github.com/BobaBoard/boba-frontend.git
# Enter the codebase directory
cd boba-frontend
# Install all necessary dependencies
yarn install
```

`boba-frontend` does not currently require any special env set up.

## Develop

:::TODO
Move these instructions to the `boba-frontend` section, similar to how it's done in the `boba-backend` install instructions.
:::

### Connect to a local `boba-backend` (default Realm)

To connect to a local `boba-backend` instance, make sure that the instance is up, then run `yarn run dev`. Going to
`http://localhost:3000` will show the default Realm (`twisted-minds`).

:::info Logging in
You can login with your BobaBoard credentials, although your test user will appear as "boba-tan".
:::

### Connect to a local `boba-backend` (multiple Realms)

BobaFrontend uses the website address (URL) to distinguish between different communities (Realms). For local
development, we use [the Bonjour protocol](https://softwarekeep.com/help-center/what-is-bonjour-service-on-windows-10) to create fake `localhost` addresses in your local network. This allows you to use `http://REALM_NAME_boba.local` addresses to simulate multiple realms.

1. Run `yarn run dev:bonjour`
2. Go to `http://twisted-minds_boba.local:3000` in your browser.

:::warning
Do ask for help if you encounter problems! If you're on a Linux machine, you may need to start the Avahi daemon.
:::

### Connect to a different backend

To connect to a different backend, you can set the backend address by updating the
`NEXT_PUBLIC_DEFAULT_BACKEND` environment variable in the `.env.development` file.

For example, to connect to a server running at `https://backend.bobaboard.com`, you can add:

```bash showLineNumbers
NEXT_PUBLIC_DEFAULT_BACKEND=https://backend.bobaboard.com
```

### Test local updates to `boba-components`

If you made changes to `boba-components`, you may want to also test your local updates in `boba-frontend`.
To do so, you'll need to build the `boba-components` package locally, and link it into the `boba-frontend` repository.

#### 1. Build the `boba-components` package and create a local package to link.

In your `boba-components` directory run:

```bash showLineNumbers
# Run the "BobaComponents first installation instructions" first.
yarn run build
yarn link
```

#### 2. Link the local `boba-components` package to `boba-frontend`

In your `boba-frontend` directory run:

```bash showLineNumbers
cd boba-frontend
yarn link @bobaboard/ui-components
```

:::warning

To see changes to BobaComponents reflected in BobaFrontend, you must run `yarn run build` in the `boba-components` folder. BobaFrontend should then pick up the changes when the page is reloaded. Loading may be slower the first time
after new changes.
:::

## Troubleshooting

### I'm getting an `0308010C:digital envelope routines::unsupported` error

This usually happens with versions of Node other than 16. You can check the current Node version by running `node -v`, and change it by running `nvm use 16`.

### I'm getting [error that happens when the backend is not up]

TODO: explain

### Help! Things are weird and I don't know why!

A good first step in troubleshooting is to install dependencies again. Double-check that you're using the correct node version by running `node -v` (it should start with 16), then simply re-run `yarn install` in the root folder.
