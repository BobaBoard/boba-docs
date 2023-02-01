# Install BobaFrontend

:::warning
This codebase requires Node **16**. If you're using [Node Version Manager](https://github.com/nvm-sh/nvm), you can switch to version 16 by running `nvm use 16` in your terminal.

You can check the current Node version by running `node -v`.
:::

:::note
This is a legacy page imported from our old documentation.

TODO[Ms.Boba]: Update to new format.
:::

BobaBoard Frontend depends on BobaComponents.

```bash
# First installation only:
git clone https://github.com/BobaBoard/boba-frontend.git
cd boba-frontend
yarn install

### HERE YOU WILL NEED TO INSTALL BOBA-COMPONENTS ###
### See next sections to choose which route ###

# What you will need to run every time:
yarn run dev:stage
```

> The above command (`yarn run dev:stage`) connects to the real server and database. Any post you make on your local machine will be reflected on the real server! Yes, this means you can make people have a really bad time if you want.
> Do not make me revoke your access!

If you want (or need) to run the frontend connected to a local DB/server, follow the instructions to launch BobaBackend and then run `yarn run dev`.

### Installing BobaFrontend, fetching BobaComponents through yarn

You should follow these instructions if you don't intend to make changes to BobaComponents, or don't care about running the latest version of BobaComponents.

> **Note**: not running the latest version might incur in some surprising problems, in case of incompatible changes. If you run into problems, contact the webmaster to get a new version of BobaComponents released. **Since the webmaster isn't regularly releasing npm updates, let her know if you wish to go this route.**

The easiest way to install BobaEditor is to run `yarn install @bobaboard/ui-components`. This will install the latest "released" version of BobaComponents in your codebase.

```bash
### Run the "first installation instructions" above. ###

yarn install @bobaboard/ui-components

### You can now continue with the rest of the instructions. ###
```

### Installing BobaFrontend, using a local BobaComponents copy

You should follow these instructions if you want to make parallel changes to BobaComponents as part of updating BobaFrontend.

```bash
### Run the "BobaComponents first installation instructions" first. ###
### You should now be in the boba-components folder. ###
yarn run build
yarn link
cd ..
### Run the "first installation instructions" above for BobaFrontend. ###
cd boba-frontend
yarn link @bobaboard/ui-components
### You can now continue with the rest of the instructions. ###
```

If you make changes to BobaComponents and want to see them reflected in BobaFrontend run `yarn run build` in the boba-frontend folder. BobaFrontend should pick up the changes when the website is reloaded.

### Running BobaFrontend

:::warning
Since Realms became a thing, BobaFrontend uses [the Bonjour protocol](https://softwarekeep.com/help-center/what-is-bonjour-service-on-windows-10) to create fake `localhost` addresses in your local network. This allows us to use `http://REALM_NAME_boba.local` addresses to get the Realm name from the
subdomain like in production.

Do ask for help if you encounter problems!
:::

1. Run `yarn run dev:bonjour`
2. Go to `http://twisted-minds_boba.local:3000` in your browser.
