---
sidebar_position: 1
---

# Codebase Overview

BobaBoard's codebase is split within 4 separate repositories, each with its own purpose and set of technologies: **BobaEditor**, the text editor, **BobaBoardUI**, a collection of visual components, **BobaServer**, where the processing magic happens, and (last but not least) **BobaFrontend**, which ties everything together into something _aspirationally_ usable and useful.

![](/img/documentation/codebase-overview.png)

## BobaEditor

\[[code](https://github.com/essential-randomness/boba-editor), [demo](https://bobaeditor.netlify.app/?path=/story/editor-preview--simple-editor)]

:::tip
**Edit this codebase if:** you want to give users more input options, including embeds, images and gifs.
:::

BobaEditor is BobaBoard's own extension of the [QuillJS text editor](https://quilljs.com/), and is responsible for anything related to **text formatting** and **embeds** (both in "edit" and "display" mode).

Content created through BobaEditor is stored in the **"Quill Delta" format**, an abstract representation that can be translated into other formats, including HTML, through various parsers.

Since other BobaBoard codebases should not interact with this format directly, **BobaEditor also exports utilities to manipulate the Delta format itself** (e.g. extracting images for upload, removing trailing spaces, etc).

## BobaBoardUI

\[[code](https://github.com/essential-randomness/bobaboard-ui), [demo](https://bobaboard-ui.netlify.app/)]

:::tip
**Edit this codebase if:** you want to improve the functionality/look of specific BobaBoard UI elements, like buttons, contributions, sidebar elements, thread stems, etc.
:::

BobaBoardUI is where BobaBoard's UI pieces (components) are developed, as separate from the "frontend/server logic" as possible to facilitate reuse and (one day) ease of testing. This is made possible by using [StoryBook](https://storybook.js.org/), which you can see in action at this [demo link](https://bobaboard-ui.netlify.app/).

## BobaFrontend

[code](https://github.com/essential-randomness/boba-frontend)

:::tip
**Edit this codebase if:** you want to change how UI elements come together to create pages like boards, threads, settings and the related user flows.
:::

The BobaBoard frontend repository is in charge of managing the full BobaBoard user experience, putting together the components defined in BobaBoardUI (see above) into logical pages, and handling the communication between the user and the server. Based on [NextJS](https://nextjs.org/).

## BobaServer

[code](https://github.com/essential-randomness/bobaserver)

:::tip
**Edit this codebase if:** you want to add new functionality to BobaBoard that goes beyond the interaction with the user (or fix existing bugs).
:::

The BobaBoard backend repository is an [ExpressJS](https://expressjs.com/) server, communicating with the BobaFrontend through a REST API.

Other than the server itself, this repository contains table definitions for BobaBoard's PostgreSQL DB.

Other technologies used include a [Redis Cache](https://redis.io/) and [Mocha](https://mochajs.org/) for testing.
