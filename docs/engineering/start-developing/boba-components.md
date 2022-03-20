---
sidebar_position: 4
---

# Install BobaComponents

\[[code](https://github.com/BobaBoard/boba-components), [demo](https://bobaboard-ui.netlify.app/)]

BobaComponents is where BobaBoard's UI pieces (components) are developed.

## Install Instructions

In a terminal, run the following commands:

```bash
# Clone the codebase from github
git clone https://github.com/BobaBoard/boba-components.git
# Enter the codebase directory
cd boba-components
# Install all necessary code
yarn install
```

### Install BobaEditor

BobaComponents lists BobaEditor as a peer dependency. This means that, while BobaEditor won't be installed automatically by `yarn install`, it is required for BobaComponents to run.

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

You should follow these instructions if you want to make parallel changes to BobaEditor as part of updating BobaComponents.

1. **[Install BobaEditor](./boba-editor.md#install-instructions).** The rest of these instructions assume you're installing BobaEditor in the same containing folder as BobaComponents.
   :::danger
   If you install BobaEditor _within_ BobaComponents, you're going to have a bad time.
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

3. **Install BobaEditor in BobaComponents**
   :::caution
   **Make sure you're in the BobaComponents directory!** To check the present directory, you can use the `pwd` command.
   :::
   In a terminal, run the following command:

   ```bash
   yarn link @bobaboard/boba-editor
   ```

You can now continue to the [development instructions](#development-instructions).

:::tip
If you make changes to BobaEditor and want to see them reflected in BobaComponents, run `yarn run build` in the boba-editor folder. BobaComponents should pick up the changes.
:::

## Development Instructions

In a terminal, run the following command:

```bash
yarn run storybook
```

You should now have a DevServer running at [http://localhost:6006](http://localhost:6006) that will look something like [the online demo](https://BobaComponents.netlify.app/).

:::tip
If new code dependencies have been added, you might need to re-run `yarn install`. If the above command is giving you problems, give it a try!
:::
