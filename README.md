# <img src="https://i.imgur.com/8kcsRh6.png" width="50px" valign="bottom"/> boba-docs

<center>

![GitHub last commit](https://custom-icon-badges.demolab.com/github/last-commit/BobaBoard/boba-docs?style=for-the-badge&color=c6a0f6&logo=git-commit)
![GitHub closed pull requests](https://custom-icon-badges.demolab.com/github/issues-pr-closed/BobaBoard/boba-docs?style=for-the-badge&color=a6da95&logo=git-pull-request-closed)
![GitHub pull requests](https://custom-icon-badges.demolab.com/github/issues-pr-raw/BobaBoard/boba-docs?style=for-the-badge&color=f0c6c6&logo=git-pull-request)
[![Open issues](https://custom-icon-badges.demolab.com/github/issues/BobaBoard/boba-docs?style=for-the-badge&color=91d7e3&logo=issue-opened)](https://github.com/BobaBoard/boba-docs/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

</center>

## BobaBoard

BobaBoard is a modern, open source community-building software that draws
inspiration from old-school forums for functionality and from modern social
media for its style of interaction. It prioritizes privacy and fluidity of
identity for users within communities and allows high levels of customization
and fine-grained permission settings for users, community managers, and instance
owners. The unique UX encourages creative expression across different formats,
styles of communication, and community building.

You can find out more about BobaBoard in general on our
[website](https://www.bobaboard.com) and as a project by visiting our
[project guide](https://docs.bobaboard.com/docs/project/intro).

## This Repo

![Built Using](https://img.shields.io/badge/Built%20Using:-222222?style=for-the-badge)
![Docusaurus Badge](https://img.shields.io/badge/Docusaurus-222222?logo=docusaurus&logoColor=3ECC5F&style=for-the-badge)
![MDX Badge](https://img.shields.io/badge/MDX-222222?logo=mdx&logoColor=ffffff&style=for-the-badge)
![Markdown Badge](https://img.shields.io/badge/Markdown-222222?logo=markdown&logoColor=fff&style=for-the-badge)

boba-docs is a monorepo containing the documentation for
[BobaBoard](https://www.bobaboard.com), as well as some docusaurus plugins we
use to pull some of our data directly from our
[GitHub organization](https://github.com/BobaBoard).

The monorepo aspect is managed through [Turborepo](https://turbo.build/) with
yarn workspaces handling each "sub-package".

## Local Development

> 📝 **NOTE:** Turborepo is not compatible with native Windows. Windows users
> will need to install WSL to edit the documentation. For more information on
> installing WSL see
> [The BobaBoard Guide to Installing WSL](https://docs.bobaboard.com/docs/engineering/start-developing/wsl).

### How to run

```
yarn install
yarn run start
```

### Workspaces

We currently have 2 groups of workspaces:

- **docusaurus/**: contains our docusaurus installation
- **plugins/\***: contains a subfolder for each docusaurus plugin maintained as
  part of this monorepo

### How to install packages in a specific workspace

Choose your poison:

#### Install packages through yarn workspace (from `root`)

This is similar to running `yarn add`, but slightly longer:
`yarn workspace [workspacename-name] add`.

For example, you can run: `yarn workspace docusaurus add @package/name`.

Documentation is on the
[Turborepo website](https://turbo.build/repo/docs/handbook/package-installation).

#### Install packages from within the workspace

Run the regular `yarn add` command from within the workspace folder

```
cd workspace/folder
yarn add @package/name`
```

Remember to still run `yarn run start` from the root directory.

## Contributing

BobaBoard welcomes one-time contributions. Our volunteer
[Code of Conduct](https://docs.bobaboard.com/docs/volunteering/experience/code-of-conduct)
applies in all of our social spaces, including Github Discussions or when
commenting on issues or pull requests.

We are also always looking for long-term volunteers to help with coding,
documentation, and other efforts. If you'd like to become a BobaBoard volunteer,
please see the
[Volunteering Guide](https://docs.bobaboard.com/docs/volunteering) for details.

## License

![MIT License](https://img.shields.io/github/license/BobaBoard/boba-docs?style=for-the-badge&color=A41931)
