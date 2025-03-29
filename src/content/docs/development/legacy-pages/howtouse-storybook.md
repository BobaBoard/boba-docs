---
title: How to use Storybook
sidebar:
  order: 5
---

Storybook allows you to display how UI components render without building a
whole user interface around them. Basically, its goal is to help you test that
each element of your UI is working in isolation, without any business logic
surrounding it. Whenever you make edits to a file and save, Storybook
automatically refreshes and shows you the changes.

For a longer guide on Storybook, you can check out the
[get started guide](https://storybook.js.org/docs/react/get-started/whats-a-story).
Note that the BobaBoard codebase doesn't use all the latest best practices as of
yet. I'll be slowly migrating components to it as I do more updates. If you'd
like to help, ask me to fill the "How to Migrate to Storybook Args" section.

## How to Create a new Story

In short, just follow this template:

```jsx
export const MyStory = () => (
	<MyHtml>Whatever html you have</MyHtml>
);
MyStory.story = {
	name: :"the name you wish this story to have"
}
```

You should write that code in the most appropriate
`/stories/[filename].stories.tsx` file in the codebases that use storybook. If
you don't find an appropriate one, read further to create a new file.

## How to Create a new Story Bundle

A story bundle (not the official name, IDK what that is?), groups related
stories together. You can create one by creating a new
`/stories/[filename].stories.tsx` file. To get a new one started, just follow
this template:

```jsx
import React from "react";
import ComponentToTest from "../src";

export default {
  title: "The title of the bundle",
  component: ComponentToTest,
};

// Here you can add all the stories you want
```

You will now find a new bundle on the sidebar when running storybook.

## How to Migrate to Storybook Args

We can greatly simplify BobaBoard's usage of Storybook by migrating to the new
args format. TODO: write how to do it.
