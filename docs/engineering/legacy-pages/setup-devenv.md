---
sidebar_position: 2
---

# Setting Up Your DevEnv

You will need:

 - **(Optional, Windows Only)** [**WSL**](https://docs.microsoft.com/en-us/windows/wsl/install-win10): This allows you to run Linux commands on Windows, and will save you many, many headaches. It required that you install WSL if you have Windows 10 Home Edition, since Docker depends on it. When installing a distribution, Ubuntu is a perfectly fine choice.
    - If you have WSL installed, you have the option of using either WSL's command prompt (bash) or a Windows command prompt (cmd or powershell) when running the commands in this document. Either will work, but whichever you choose, use the same command prompt consistently for all commands. This will prevent annoying issues due to differences in how yarn works on Windows vs Linux.
 - **NodeJS**: Allows you to execute JavaScript outside of a web browser. This is installed via NVM.
 - [**NVM**](https://github.com/nvm-sh/nvm): Node Version Manager. Allows you to manage multiple versions of NodeJS on the same machine. A useful thing to have, and what you should use to install NodeJS.
    - While NVM isn't natively supported on Windows, you can get access to it through WSL.
    - You can also install NodeJS directly through the installer, but you won't be able to switch between versions. Will you regret it? Try it, and find out.
 - [**Yarn**](https://classic.yarnpkg.com/en/): JavaScript Package Manager. Installs the external code that BobaBoard depends on, without you having to manually download everything yourself. Also used to hide complex scripts under simpler commands like `yarn run test`.
 - [**GitHub**](https://github.com/): You will use a GitHub account to download the BobaBoard code, make changes and send them back for review.
 - **(BobaServer Only)** [**Docker**](https://www.docker.com/products/docker-desktop): Docker runs applications in containers. [I literally had to Google an ELI5.](https://www.reddit.com/r/docker/comments/9xwlg6/can_anyone_eli5_what_docker_is_and_its_practical/) Trust me, you don't need to understand this to use it.
    - You also need [Docker Compose](https://docs.docker.com/compose/install/). This comes for free with the above in Windows and Mac, but might need additional steps on Linux.
    - For Windows, you should run docker in a WSL2 instance. There's a checkbox in Docker settings for this. (This is required if you have Windows 10 Home Edition, and only recommended for other versions of Windows 10.) If Docker is failing to start, make sure you have WSL2 installed.
 - **(BobaServer Only)** [**Redis**](https://redis.io/topics/quickstart): Redis is a caching server, which saves the result of queries made to the backend's database so we can give them back to users without recalculating them over and over again.
 
Make sure you have these before moving forward with the commands in the next sections.

## How to Develop

You can install each codebase independently by following the "fetching dependencies through yarn" section in its instructions. If you want to "catch them all", you should go through each of them in reading order and follow the "local copy" section instead.

> Using `npm` instead of `yarn` will result in errors. You can blame React for that.

<details>
<summary>Developing for BobaEditor (the text editor)</summary>

### How to Install & Run

```
# First installation only:
git clone https://github.com/essential-randomness/boba-editor.git
cd boba-editor
yarn install
# What you will need to run every time:
yarn run storybook
```

You should now have a DevServer open at http://localhost:6006 that will look something like [the online demo](https://bobaeditor.netlify.app/).

Embeds that rely on [iFramely](https://github.com/itteco/iframely) won't work out of the box. If you're developing for embeds, you have two options:
1. **Connect to the BobaBoard embeds service**: Given that the embeds service isn't accepting connections from localhost for security reasons, you will need to install an "Allow CORS extension" ([example for Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)). Once you allow CORS in your browser window, embeds should automatically start working.
2. **Run iFramely on your own machine**: I don't see why you would want to do this, unless you're fiddling with iFramely's setup. You can run storybook pointing to a localhost instance of iFramely by using the `yarn run storybook:local-embeds` command. To run your own iFramely you can use the instructions [here](https://iframely.com/docs/host). You will also likely need BobaBoard's iframely config as a started config. You can ask the webmaster for a copy of this file.
</details>

<details>
<summary>Developing for BobaBoard UI (Component System)</summary>

> BobaBoard UI lists BobaEditor as a peer dependency. This means that, while BobaEditor won't be installed automatically by `yarn install`, it is required for BobaBoard UI to run.

```
# First installation only:
git clone https://github.com/essential-randomness/bobaboard-ui.git
cd bobaboard-ui
yarn install

### HERE YOU WILL NEED TO INSTALL BOBAEDITOR ###
### See next sections to choose which route ###

# What you will need to run every time:
yarn run storybook
```

### Installing BobaBoard UI, fetching BobaEditor through yarn

You should follow these instructions if you don't intend to make changes to BobaEditor, or don't care about running the latest version of BobaEditor.

> **Note**: not running the latest version might incur in some surprising problems, in case of incompatible changes. If you run into problems, contact the webmaster to get a new version of BobaEditor released. **Since the webmaster isn't regularly releasing npm updates, let her know if you wish to go this route.** `Last release: v0.0.10 on 3/15/21.`

The easiest way to install BobaEditor is to run `yarn install @bobaboard/boba-editor`. This will install the latest "released" version of BobaEditor in your codebase.

```
### Run the "first installation instructions" above. ###

yarn install @bobaboard/boba-editor

### You can now continue with the rest of the instructions. ###
```

### Installing BobaBoard UI, using a local BobaEditor copy

You should follow these instructions if you want to make parallel changes to BobaEditor as part of updating BobaBoard UI

```
### Run the "BobaEditor first installation instructions" above. ###
### You should now be in the BobaEditor folder. ###
yarn run build
yarn link
cd ..
### Run the "BobaBoard UI first installation instructions" above. ###
### You should now be in the BobaBoard UI folder. ###
yarn link @bobaboard/boba-editor
### You can now continue with the rest of the instructions. ###
```

If you make changes to BobaEditor and want to see them reflected in BobaBoard UI, run `yarn run build` in the boba-editor folder. BobaBoard UI should pick up the changes.
</details>

<details>
<summary>Developing for BobaBoard Frontend</summary>

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
</details>

<details>
<summary>Developing for BobaBoard Backend</summary>

> This is currently a private repository. Contact the BobaLord for access!

> x2 : make sure you have [Docker](https://www.docker.com/products/docker-desktop) installed. This is the only codebase that needs it.

> x3 : make sure you have [Redis](https://redis.io/) installed. This is the only codebase that needs it.

```
# First installation only:
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
touch firebase-sdk.json
# Download the file right after these instructions and copy its content within
# the firebase SDK file you just created.

# What you will need to run every time:
yarn run start-db
redis-server
yarn run dev:watch
```

Download this file, and copy its content to the `firebase-sdk.json` file you created in the previous step. This gives you read access to the firebase users DB, but no write access.

**Not sure whether to add this here, so leaving it off.**

> To log in, you can use your credential for the OG BobaBoard website, which will be associated with Bobatan's test account on the local server. Actions you take won't be reflected in production, so test away!

The above command will automatically restart your server on any code change you make. For some edits, like updates to .sql files, you might need to restart it manually.

You can also run tests by using the `yarn run test:watch` command.

You can test the backend in two ways: **with [Postman](https://www.postman.com/downloads/)**, which helps you send requests directly to the server, or by running BobaFrontend with `yarn run dev`.

### How to Set Up Postman

TODO
</details>