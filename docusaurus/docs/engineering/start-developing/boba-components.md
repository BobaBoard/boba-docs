---
sidebar_position: 6
---

# Install BobaComponents

\[[code](https://github.com/BobaBoard/boba-components), [demo](https://bobaboard-ui.netlify.app/)]

BobaComponents is where BobaBoard's UI pieces (components) are developed.

## Install Instructions

The first time you work on BobaComponents you need to [fork the repository]((https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository)) so you can edit your own version of the code.

### 1 — Clone your fork

After forking the repository, open up a terminal and run the following commands:

```bash   showLineNumbers
# Clone the codebase from github
git clone https://github.com/[YOUR GITHUB USERNAME HERE]/boba-components.git
# Enter the codebase directory
cd boba-components
# Install all necessary code
yarn install
```

:::tip
The commands shown use HTTPS to interact with the code on GitHub but you can do so with SSH if you've got it set up
:::

### 2 — Add the BobaBoard repository as a remote

Once you've made your changes to your fork, you'll need some way of pushing the changes to the upstream codebase. To do so, we need to tell git how to find it. Run the following command:

```bash
git remote add upstream https://github.com/BobaBoard/boba-components.git
```

### 3 — Install BobaEditor

BobaComponents lists BobaEditor as a peer dependency. This means that, while BobaEditor won't be installed automatically by `yarn install`, it is required for BobaComponents to run.

#### Option 1 - Fetch BobaEditor through yarn

You should follow these instructions if you don't intend to make changes to BobaEditor, or don't care about running the latest version of BobaEditor.

```bash   showLineNumbers
yarn install @bobaboard/boba-editor
```

:::danger
Not running the latest version might incur in some surprising problems in case of incompatible changes. **Since Ms. Boba isn't regularly releasing npm updates, let her know if you wish to go this route.**

You can [check when BobaEditor was last released](https://www.npmjs.com/package/@bobaboard/boba-editor) on its npm page.
:::

You can now continue to the [development instructions](#development-instructions).

#### Option 2 - Use a local copy of BobaEditor

You should follow these instructions if you want to make parallel changes to BobaEditor as part of updating BobaComponents.

1. **[Install BobaEditor](/docusaurus/docs/engineering/start-developing/boba-editor.md).** The rest of these instructions assume you're installing BobaEditor in the same containing folder as BobaComponents.
   :::danger
   If you install BobaEditor _within_ BobaComponents, you're going to have a bad time.
   :::
2. **Build and link BobaEditor.**

   :::caution
   **Make sure you're in the BobaEditor directory!** To check the present directory, you can use the `pwd` command.
   :::

   In a terminal, run the following commands:

   ```bash   showLineNumbers
   cd boba-editor
   yarn run build
   yarn link
   ```

   This will create the `@bobaboard/boba-editor` package on your _local_ machine.

3. **Install BobaEditor in BobaComponents**
   :::caution
   **Make sure you're in the BobaComponents directory!** To check the present directory, you can use the `pwd` command.
   :::
   In a terminal, run the following commands:

   ```bash   showLineNumbers
   cd boba-components
   yarn link @bobaboard/boba-editor
   ```

You can now continue to the [development instructions](#development-instructions).

:::tip
If you make changes to BobaEditor and want to see them reflected in BobaComponents, run `yarn run build` in the BobaEditor folder. BobaComponents should pick up the changes.
:::

## Development Instructions

:::warning
This codebase requires Node **16**. If you're using [Node Version Manager](https://github.com/nvm-sh/nvm), you can switch to version 16 by running `nvm use 16` in your terminal.

You can check the current Node version by running `node -v`.
:::

In a terminal, run the following command:

```bash   showLineNumbers
yarn run storybook
```

You should now have a DevServer running at [http://localhost:6006](http://localhost:6006) that will look something like [the online demo](https://boba-components.netlify.app/).

:::tip
If new code dependencies have been added, you might need to re-run `yarn install`. If the above command is giving you problems, give it a try!
:::
