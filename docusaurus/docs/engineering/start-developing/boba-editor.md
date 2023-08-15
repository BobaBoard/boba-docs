---
sidebar_position: 7
---

# Install BobaEditor

\[[code](https://github.com/BobaBoard/boba-editor), [demo](https://bobaeditor.netlify.app/?path=/story/editor-preview--simple-editor)]

BobaEditor is BobaBoard's own extension of the [QuillJS text editor](https://quilljs.com/), and is responsible for anything related to **text formatting** and **embeds** (both in "edit" and "display" mode).

## Check Out the Codebase

First, [fork the boba-editor repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) in order to save a copy of the code to your own account.

In a terminal on your own machine, enter the local directory where you want to keep your copy of BobaEditor, then run the following commands:

```bash   showLineNumbers
# Clone the codebase from github
git clone https://github.com/[YOUR GITHUB USERNAME HERE]/boba-editor.git
# Enter the codebase directory
cd boba-editor
# Install all necessary code
yarn install
```

:::tip

If you would prefer to use a GUI with GitHub, you can [fork and clone](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) via GitHub Desktop, then enter your new directory in a terminal and run `yarn install`.

:::

## Start a Local DevServer

:::warning

This codebase requires Node **16**. If you're using [Node Version Manager](https://github.com/nvm-sh/nvm), you can switch to version 16 by running `nvm use 16` in your terminal.

You can check the current Node version by running `node -v`.

:::

In a terminal, run the following command:

```bash   showLineNumbers
yarn run storybook
```

You should now have a DevServer running at [http://localhost:6006](http://localhost:6006) that will look something like [the online demo](https://bobaeditor.netlify.app/).

:::tip

If new code dependencies have been added, you might need to re-run `yarn install`. If the above command is giving you problems, give it a try!

:::

## Developing for Embeds

Embeds that rely on [iFramely](https://github.com/itteco/iframely) won't work out of the box. If you're developing for embeds, you have two options:

### Option 1: Connect to the BobaBoard embeds service (Recommended)

Given that the embeds service won't accept requests from localhost for security reasons, you will need to install an "Allow CORS extension" ([example for Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)). Once you allow [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) in your browser window, embeds should automatically start working.

### Option 2: Run iFramely on your own machine

:::caution

You shouldn't need to do this, unless you're fiddling with iFramely's setup.

:::

You can run storybook pointing to a local instance of iFramely by using the `yarn run storybook:local-embeds` command. To run your own iFramely you can use the instructions [here](https://iframely.com/docs/host). You will also likely need BobaBoard's iframely config as a started config. You can ask the webmaster for a copy of this file.
