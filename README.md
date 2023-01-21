# BobaDocs

A monorepo containing the documentation for [BobaBoard](https://www.bobaboard.com), as well as some docusaurus plugins
we use to pull some of our data directly from our [GitHub organization](https://github.com/BobaBoard).

The monorepo aspect is managed through [Turborepo](https://turbo.build/), with yarn workspaces handling each "sub-package".

## How to run

```
yarn install
yarn run start
```

## Workspaces

We currently have 2 groups of workspaces:

- **docusaurus/**: contains our docusaurus installation
- **plugins/\***: contains a subfolder for each docusaurus plugin maintained as part of this monorepo

## How to install packages in a specific workspace

Choose your poison:

### Install packages through yarn workspace (from `root`)

This is similar to running `yarn add`, but slightly longer: `yarn workspace [workspacename-name] add`.

For example, you can run: `yarn workspace docusaurus add @package/name`.

Documentation is on the [Turborepo website](https://turbo.build/repo/docs/handbook/package-installation).

### Install packages from within the workspace

Run the regular `yarn add` command from within the workspace folder

```
cd workspace/folder
yarn add @package/name`
```

Remeber to still run `yarn run start` from the root directory.
