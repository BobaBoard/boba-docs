---
sidebar_position: 3
---

# BobaEditor Codebase Guide

For installation instructions check out [Setting Up Your DevEnv](/docs/development/start-developing/before-you-start).

## Overview

The [BobaEditor Codebase](https://github.com/BobaBoard/boba-editor) contains all code pertaining to BobaBoard's text editing capabilities ([see demo](https://bobaeditor.netlify.app/)). It's written in Typescript and React.

There are two important folders:

- **src:** where all the source code is.
- **stories:** where the "testing stories" (the one you see on the demo's left-hand sidebar) are defined.

### Src Folder

![Editor.tsx codes the editor as a whole, the custom-nodes folder contains classes for custom functionality, Tooltip.tsx codes the embeds toolbar, and TenorKeyboard.jsx codes the Tenor plugin.](/img/legacy/classes.png)

The main editor component is **`Editor.tsx`**. This is a React Class Component which wraps a QuillJS editor within itself. It takes care of displaying text both in edit mode (when the **`editable`** props is true) as well as read-only mode (with **`editable`** props = false). \*\*\*\*Documentation for every prop is available in the comments for the TypeScript interface.

Within `Editor.tsx` the `Toolbar` component, contains the options in edit mode (e.g. bold, italic, spoilers, headers and so on). This should not be confused with `Tooltip.tsx` which, instead, contains the options that are only available on empty new lines (e.g. add image, embed video, search gif and so on). The display of the Tooltip is controlled by the `maybeShowEmptyLineTooltip` method within `Editor.tsx`, which checks whether the cursor is presently on an empty line.

### Delta Overview

TODO: add a quick overview of how the delta format works to help people get a rough understanding of it.

> [Actually, this exists now!](../boba-editor/the-delta-format)

## Custom Nodes & Embeds

Custom elements and formatting are implemented using [Parchment](https://github.com/quilljs/parchment), Quill's document model, and stored under `custom-nodes`. Rather than reading the suboptimal Parchment documentation, the easiest way to understand how these work is to look at how other types are implemented.

### How Custom Nodes Work

There's two types of custom nodes: `inline` and `block`. If you're familiar with [inline vs block CSS elements](https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/), I understand these to be roughly equivalent.

**The entry point for block nodes (e.g. embeds) is the "create" method.** This is called by Quill every time an embed of the given type is added to the editor, either manually by the user or as part of loading a saved delta. In the first case the argument will be the value supplied by the user (e.g. the embed URL in case of embeds), in the latter the argument will be the value stored in the embed configuration, which you can see returned by the **"value"** method.

Embeds loaded through [iFramely](http://iframely.com/) are handled by subclassing `OEmbedBase.ts` with embed-specific logic. `OEmbedBase.ts` \*\*\*\*also handles "best effort load" embeds.

**Styling for embeds** is handled by `CustomNodesStyle.tsx`. Note the `:global()` instruction wrapping class names, which will have to be cleaned up at some point (but is necessary for now).

### How to Add a New Embed Type

1. After adding a new embed in `custom-nodes`, note the `blotName` exported by the static class created (e.g. `youtube-video`, `tweet`, `oembed-embed`, etc). _NOTE: we should probably standardize these at some point_).
2. Add your new embed type in `tooltipConfig.ts`. The default configuration is used by the large "contributions" editor, while the single line configuration is used by comments.

### How Custom Nodes are Loaded into Quill

All valid embed files within the `custom-nodes` folder are automatically loaded into Quill . This is performed by the `addCustomEmbeds` method in `Editor`, which also automatically adds two embed lifecycle methods:

- `onLoadCallback`: called when the embed has actually finished loading (content included).
- `onRemoveRequestCallback`: called when the removal of an embed has been requested.

`addCustomEmbeds` also provides embeds with the `cache` object (used to store embeds that have already loaded so we won't need to reload them over and over again), and with the `embedsFetcher`, which is used to retrieve data from the backend.

## Exported Methods

Beside the Editor itself, BobaEditor's package exports include:

- `setTumblrEmbedFetcher`: must be passed a method that, given a Tumblr url, returns the corresponding embed. This is because Tumblr's embed library returns a CORS error on regular Tumblr embed urls, making it basically useless.
- `setOEmbedFetcher`: must be passed a method that given a url returns the response given by the iFramely embed service (or equivalent).
- `getAllImages`: a method to get all the images within a Delta. Used to extract the images for upload.
- `replaceImages`: a method to replace all the images within a Delta. Used to swap out images with the new, uploaded ones.
- `removeTrailingWhitespace`: can be used to optionally remove any trailing whitespace from a delta.

## Storybook

See [How to use Storybook](./howtouse-storybook)

## Debugging

BobaEditor uses the [debug](https://www.npmjs.com/package/debug) JS library. To trigger debugging in the JavaScript console, you must set the value of the corresponding flag in localStorage by using one of the following commands within the console itself:

```jsx
// Print all the debug logs related to the editor
localStorage.debug = "bobapost:*";

// Print only the debug logs related to embeds
localStorage.debug = "bobapost:embeds:*";

// Print only the debug logs related to Twitter embeds
localStorage.debug = "bobapost:embeds:tweet";

// Print all the debug logs minus those ending with -verbose
localStorage.debug = "bobapost:*,-bobapost:*-verbose";
```

### Debugging Embeds

If you need to do this, please let me know and I will have you implement an easy way to do it for everyone to use. I know what should be done, but I don't have time right now.

## Testing

You can click around in storybook to check whether everything is working as expected. Yes, this is less than ideal. [BackstopJS](https://github.com/garris/BackstopJS) is technically set up for this codebase, but it requires manual set up for every story in storybook and that's also terrible. If this is something you'd like to tackle, [Implement Storybook Testing (Notion)](https://www.notion.so/Implement-Storybook-Testing-d4d15ca68a3c4183b5cc67fcf8dd7d06) is the task for you!
