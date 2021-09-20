---
sidebar_position: 4
---

# Install BobaBoard UI

\[[code](https://github.com/essential-randomness/bobaboard-ui), [demo](https://bobaboard-ui.netlify.app/)]

BobaBoardUI is where BobaBoard's UI pieces (components) are developed.

## Install Instructions

In a terminal, run the following commands:

```bash
# Clone the codebase from github
git clone https://github.com/essential-randomness/bobaboard-ui.git
# Enter the codebase directory
cd bobaboard-ui
# Install all necessary code
yarn install
```

### Install BobaEditor

BobaBoard UI lists BobaEditor as a peer dependency. This means that, while BobaEditor won't be installed automatically by `yarn install`, it is required for BobaBoard UI to run.

#### Option 1 - Fetch BobaEditor through yarn

You should follow these instructions if you don't intend to make changes to BobaEditor, or don't care about running the latest version of BobaEditor.

```bash
yarn install @bobaboard/boba-editor
```

:::danger
Not running the latest version might incur in some surprising problems in case of incompatible changes. **Since Ms. Boba isn't regularly releasing npm updates, let her know if you wish to go this route.**

You can [check when BobaEditor was last released](https://www.npmjs.com/package/@bobaboard/boba-editor) on its npm page.
:::

You can now continue to the [development instructions](#development-instructions).

#### Option 2 - Use a local BobaEditor copy

You should follow these instructions if you want to make parallel changes to BobaEditor as part of updating BobaBoard UI.

1. **[Install BobaEditor](./bobaeditor.md#install-instructions).** The rest of these instructions assume you're installing BobaEditor in the same containing folder as BobaBoard UI.
   :::danger
   If you install BobaEditor _within_ BobaBoard UI, you're going to have a bad time.
   :::
2. **Build and link BobaEditor.**

   :::caution
   **Make sure you're in the BobaEditor directory!** To check the present directory, you can use the `pwd` command.
   :::

   In a terminal, run the following command:

   ```bash
   yarn run build
   yarn link
   ```

   This will create the `@bobaboard/boba-editor` package on your _local_ machine.

3. **Install BobaEditor in BobaBoard UI**
   :::caution
   **Make sure you're in the BobaBoard UI directory!** To check the present directory, you can use the `pwd` command.
   :::
   In a terminal, run the following command:

   ```bash
   yarn link @bobaboard/boba-editor
   ```

You can now continue to the [development instructions](#development-instructions).

:::tip
If you make changes to BobaEditor and want to see them reflected in BobaBoard UI, run `yarn run build` in the boba-editor folder. BobaBoard UI should pick up the changes.
:::

## Development Instructions

In a terminal, run the following command:

```bash
yarn run storybook
```

You should now have a DevServer running at [http://localhost:6006](http://localhost:6006) that will look something like [the online demo](https://bobaboardui.netlify.app/).

:::tip
If new code dependencies have been added, you might need to re-run `yarn install`. If the above command is giving you problems, give it a try!
:::
