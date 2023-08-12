---
sidebar_position: 1
---

# Getting Started

:::important

Before continuing with this section, **follow the installation instructions** in our [Contribute section](/docs/engineering/start-developing/boba-backend).

:::

## Development Instructions

:::warning

This codebase requires Node **16**. If you're using [Node Version Manager](https://github.com/nvm-sh/nvm), you can switch to version 16 by running `nvm use 16` in your terminal.

You can check the current Node version by running `node -v`.

:::

To develop for BobaBackend, you will need to start 3 separate components: the database, the cache, and the actual server.

### Start DB

In a terminal, run the following command:

```
yarn run start-db
```

:::note

This command starts both the database (Postgres) and the cache (Redis).

:::

### Run development server

In a terminal, run the following command:

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

You can test the server is running by opening `http://localhost:4200/realms/slug/twisted-minds` in any browser. You should now see a list of all the realm properties in [JSON format](https://developers.squarespace.com/what-is-json).

:::tip

Accessing a URL through a browser is equivalent to making a GET request to the same URL through [Postman](/docs/engineering/boba-backend/using-postman).

:::
