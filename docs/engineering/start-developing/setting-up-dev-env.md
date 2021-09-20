---
sidebar_position: 2
---

# Setup Your Development Environment

This is an overview of the programs you'll need to install before developing for BobaBoard.

:::tip
**Developing for BobaBoard requires use of the command line.** While this might seem scary, the amount of commands needed is minimal, and they can often be run without even understanding them.

If you're intimidated, contact Ms. Boba for help! Also consider editing this page to make it less scary for newcomers.
:::

## What to Install

### Install Checklist

- [ ] [Windows Subsystem for Linux (WSL)](#windows-subsystem-for-linux-wsl-windows-only) [Windows Only]
- [ ] [Git](#git)
- [ ] [NodeJS](#nodejs-with-nvm)
- [ ] [Yarn](#yarn)
- [ ] [Docker](#docker-bobaserver-only) [BobaServer Only]
- [ ] [Redis](#redis-bobaserver-only) [BobaServer Only]

### Windows Subsystem for Linux (WSL) [Windows Only]

:::warning
This is optional, but **highly recommended**. Without this, we might not be able to help you in case of errors.
:::

**[WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) allows you to run Linux commands on Windows**, and will save you many, many headaches. When installing a distribution, Ubuntu is a perfectly fine choice.

:::caution
If you need Docker (see below) and have Windows 10 Home Edition, you must install WSL.
:::

If you have WSL installed, you have the option of using either WSL's command prompt (bash) or a Windows command prompt (cmd or powershell) when running the commands in this document. Either will work, but whichever you choose, use the same command prompt consistently for all commands. This will prevent annoying issues due to differences in how yarn works on Windows vs Linux. **If you are undecided, go with bash.**

### Git/GitHub

**You will use Git and a [GitHub](https://github.com/) account to download the BobaBoard code, make changes and send them out for review. **You can [learn more about Git and GitHub](/docs/engineering/knowledge-base/github.md) in our knowledge base.

You can find [instruction to install git](https://github.com/git-guides/install-git) on GitHub. While this documentation assumes you're using git through the command line, using GitHub Desktop might provide a better experience for newcomers.

### NodeJS (with NVM)

**NodeJS allows you to execute JavaScript outside of a web browser.** This should be installed via the [**Node Version Manager**](https://github.com/nvm-sh/nvm) (NVM), which allows you to manage multiple versions of NodeJS on the same machine.

:::caution
You can also install NodeJS directly through the installer, but you won't be able to switch between versions. Will you regret it? Try it, and find out.
:::

:::tip
While NVM isn't natively supported on Windows, you can get access to it through [WSL](#windows-subsystem-for-linux-wsl-windows-only).
:::

### Yarn

**[Yarn](https://classic.yarnpkg.com/en/) is a JavaScript Package Manager, which automatically downloads and installs the external code that BobaBoard depends on**, without you having to manually download everything yourself. Yarn is also used to hide complex scripts under simpler commands like `yarn run test`.

:::tip
Using `npm` instead of `yarn` will result in errors. You can blame React for that.
:::

### Docker [BobaServer Only]

[**Docker**](https://www.docker.com/products/docker-desktop) runs applications in containers. [I literally had to Google an ELI5.](https://www.reddit.com/r/docker/comments/9xwlg6/can_anyone_eli5_what_docker_is_and_its_practical/) Trust me, you don't need to understand Docker to use it.

- You also need [Docker Compose](https://docs.docker.com/compose/install/). This comes for free with the above in Windows and Mac, but might need additional steps on Linux.
  :::note
  TODO[Ms.Boba]: AFAIK Docker Compose is now always bundled with Docker. Check and update this documentation.
  :::
- **[Windows Only]** You should run docker in a WSL2 instance. There's a checkbox in Docker settings for this. (This is required if you have Windows 10 Home Edition, and only recommended for other versions of Windows 10.) If Docker is failing to start, make sure you have WSL2 installed.

### Redis [BobaServer Only]

[**Redis**](https://redis.io/topics/quickstart) is a caching server, which saves the result of queries made to the backend's database so we can give them back to users without recalculating them over and over again. You can [learn more about caches](.../../../knowledge-base/caching.md) in our knowledge base.

## Next Steps

You can install each codebase independently by following the "fetching dependencies through yarn" section in its instructions. If you want to "catch them all", you should go through each of them in reading order and follow the "local copy" section instead.

## BobaBoard Install Fests

"Install Fests" are events where one or more contributors install the BobaBoard codebase together and help each other in case of problems. Ms. Boba is also there on standby for any question that comes up.

While we plan to organize regular install fests in the future, we currently schedule them on request. You can contact Ms. Boba for availability.
