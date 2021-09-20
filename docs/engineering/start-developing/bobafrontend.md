# Install BobaFrontend

:::note
This is a legacy page imported from our old documentation.

TODO[Ms.Boba]: Update to new format.
:::

> This is currently a private repository. Contact the BobaLord for access!

BobaBoard Frontend depends on BobaBoard UI.

```
# First installation only:
git clone https://github.com/essential-randomness/boba-frontend.git
cd boba-frontend
yarn install

### HERE YOU WILL NEED TO INSTALL BOBABOARD-UI ###
### See next sections to choose which route ###

# What you will need to run every time:
yarn run dev:stage
```

> The above command (`yarn run dev:stage`) connects to the real server and database. Any post you make on your local machine will be reflected on the real server! Yes, this means you can make people have a really bad time if you want.
> Do not make me revoke your access!

If you want (or need) to run the frontend connected to a local DB/server, follow the instructions to launch BobaServer and then run `yarn run dev`.

### Installing BobaFrontend, fetching BobaBoard UI through yarn

You should follow these instructions if you don't intend to make changes to BobaBoard UI, or don't care about running the latest version of BobaBoard UI.

> **Note**: not running the latest version might incur in some surprising problems, in case of incompatible changes. If you run into problems, contact the webmaster to get a new version of BobaBoard UI released. **Since the webmaster isn't regularly releasing npm updates, let her know if you wish to go this route.**

The easiest way to install BobaEditor is to run `yarn install @bobaboard/ui-components`. This will install the latest "released" version of BobaBoard UI in your codebase.

```
### Run the "first installation instructions" above. ###

yarn install @bobaboard/ui-components

### You can now continue with the rest of the instructions. ###
```

### Installing BobaFrontend, using a local BobaBoard UI copy

You should follow these instructions if you want to make parallel changes to BobaBoard UI as part of updating BobaFrontend.

```
### Run the "BobaBoard UI first installation instructions" above. ###
### You should now be in the bobaboard-ui folder. ###
yarn run build
yarn link
cd ..
### Run the "first installation instructions" above for BobaFrontend. ###
cd boba-frontend
yarn link @bobaboard/ui-components
### You can now continue with the rest of the instructions. ###
```

If you make changes to BobaBoard UI and want to see them reflected in BobaFrontend run `yarn run build` in the bobaboard-ui folder. BobaFrontend should pick up the changes when the website is reloaded.
