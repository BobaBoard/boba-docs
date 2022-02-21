---
id: ui-tests
title: UI Tests with Jest and Storybook
---

This guide will cover how to write tests for the bobaboard-ui codebase.

## Tools

We will use the following tools:

- [Jest](https://jestjs.io/) - Sets up the basic structure of our tests and lets us `expect` a thing `.to` match some other thing or condition.
- [jest-dom](https://github.com/testing-library/jest-dom) - Extends Jest and gives us more useful `.to...` matchers.
- [Testing Library](https://testing-library.com/docs/dom-testing-library/intro) - Gives our tests ways to find elements in our rendered components that match as closely as possible to how the user would interact with the component on the the real site.
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) - Lets us render and test our ui components independently. For Bobaboard it looks like [this](https://bobaboard-ui.netlify.app/).
- **Storybook Add-ons:**
  - [@storybook/testing-react](https://storybook.js.org/addons/@storybook/testing-react) - Lets us use our stories in Jest tests.
  - [Actions](https://storybook.js.org/docs/react/essentials/actions) - Lets us rig buttons and the like (that would normally interact with things outside of the current component) to tell us a certain thing happens when triggered.

## Stories

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) lets us render and test our ui components independently from the business logic of our application. When you run Storybook from the command line (bash terminal) in your bobaboard-ui directory with `yarn run storybook`, it will open in your browser looking more or less like [this](https://bobaboard-ui.netlify.app/), but will update live with any changes you make to the src code.

:::caution Known Issue
There is currently an issue with the bobaboard-ui codebase and Storybook where after a few minutes Storybook starts running really slowly. Ms. Boba is trying to get it figured out. In the meantime, you may need to close it (ctrl+C in your terminal) and restart it when it becomes unusable.
:::

In order for Storybook to render our components, we need to compose stories files for them that let us directly pass the appropriate props to model the different permutations each component can take on.

The basic layout of a stories file for a component has:

- a `default` object with:
  - a `title` that tells Storybook how to group and label it in the Storybook sidebar.
  - a `component` that points it to the component to render.
- a `Template` which returns the component in jsx and sets up passing props to the components as `args`.
- One or more `Stories` that `bind` to the `Template` and have `args` objects that let us pass different sets of props to the component for each story.

In practice, a stories file looks something like this:

```typescript title="stories/11-ComponentGroup/01-Component.stories.tsx"
import Component, { ComponentProps } from "../../src/path/Component";
import { Meta, Story } from "@storybook/react";

import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component Group/Component Name",
  component: Component,
  // Optional 'decorators' can also be added here to wrap the component so it displays and behaves properly,
  // see the Storybook docs for details.
} as Meta;

const ComponentTemplate: Story<ComponentProps> = (args: ComponentProps) => {
  return <Component {...args} />;
};

export const StoryOne = BoardsMenuSectionTemplate.bind({});
StoryOne.args = {
  propA: "value",
  propB: true,
  propC: ["array", "of", "values"],
};

export const StoryTwo = BoardsMenuSectionTemplate.bind({});
StoryTwo.args = {
  propA: "different value",
  propB: false,
  propC: ["array", "with", "other", "values"],
};

export const StoryThree = BoardsMenuSectionTemplate.bind({});
StoryThree.args = {
  ...StoryOne.args,
  propA: "third value",
  propD: value,
};
```

The goal is to have enough stories to display each state a component could be in and each option it could have. If you are writing tests for an existing component, it should already have stories written, but you may find that you have to tweak them a bit, or add additional props, to cover all the cases you need to test.

:::tip Typescript Tip
If you ever want to see exactly what all the props a given component should or could have are, typescript has your back. Look in the src file for the component and find the `interface` and/or `type` declarations where the types are defined for the component's props. Here's an example from the BoardMenuItem component of Boba's side menu:

```typescript
export interface BoardMenuItemProps {
  avatar: string;
  color: string;
  updates?: number | boolean;
  slug: string;
  link: LinkWithAction;
  muted?: boolean;
  outdated?: boolean;
  current?: boolean;
  loading?: false;
}
```

:::

### Actions

If a component has props that are links or functions, we can use [actions](https://storybook.js.org/docs/react/essentials/actions) to model what happens when they are triggered.

For example, for a link, your `Story.args` might include:

```typescript
link: { href: "#slug", onClick: action("#slug") },
```

and a component with a Submit button on a text input might have:

```typescript
onSubmit: (text) => action("submit")(text),
```

When you type in this text input in Storybook and click the Submit button, the callback will be logged in Storybook's Action tab with _submit: "the text you typed"_. We can also leverage these actions in our tests to simulate what happens when a user interacts with the component.

## Jest tests

Running `yarn run test` from the command line (bash terminal) in your bobaboard-ui directory will run all the existing tests. You can also run individual test suites with `yarn jest fileName`, and `yarn run test:watch`

### Setting Up the Test File

The first step in writing tests is to set up your test file and figure out what you need to test for.

the `describe` function lets us create groups of test within our file. You generally want to group all the test for a given story into a `describe`.

```typescript title="tests/11-ComponentGroup/Component.test.tsx"
import "@testing-library/jest-dom/extend-expect";

// Import the stories you're going to test against
import * as stories from "stories/11-ComponentGroup/01-Component.stories";

// Import the prop types for the component
import { ComponentProps } from "../../src/path/Component";

import { render, screen, waitFor, within } from "@testing-library/react";

import React from "react";
import { action } from "@storybook/addon-actions";
import { composeStories } from "@storybook/testing-react";
import { mocked } from "ts-jest/utils";
import userEvent from "@testing-library/user-event";

// Set up jest to mock actions
jest.mock("@storybook/addon-actions");

// Set up each story you want to run tests on
const { StoryOne, StoryTwo, StoryThree } = composeStories(stories);

describe("StoryOne", () => {
  test("Description of a thing to test", async () => {
    render(<StoryOne />);

    //TODO fill in the test details
  });

  test("Description of another thing to test", async () => {
    render(<StoryOne />);

    //TODO fill in the test details
  });

  test("Description of a third thing to test", async () => {
    render(<StoryOne />);

    //TODO fill in the test details
  });
});

describe("StoryTwo", () => {
  test("Description of a thing to test", async () => {
    render(<StoryTwo />);

    //TODO fill in the test details
  });
});

describe("StoryThree", () => {
  test("Description of a thing to test", async () => {
    render(<StoryThree />);

    //TODO fill in the test details
  });
});
```

:::tip Typescript Tip
When you are trying to access the value of a story prop with `Story.args.value` you may run in two sorts of related typescript errors:

1. The prop is of a type that is actually `TypeA | TypeB`. We can tell it which type it is explicitly by saying `(Story.args as TypeA).value`.
2. The prop is potentially undefined. We can assert that the value is not null or undefined with `!` like this `Story.args!.value!`. (If you are using eslint you will still have a "Forbidden non-null assertion" error, but you can ignore it here.)

Outside of testing, we generally want to avoid these sort of assertions, and actually handle the null cases in our code and use [narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) to determine which of multiple possible types we are working with, but for testing that's overkill. If something goes wrong the repercussions are that the test fails, which is what we want to happen in the case of a problem anyway.
:::

### userEvent

:::caution
Bobaboard-ui is currently using the older 13.5.0 version of user-event, the docs for which can be found [here](https://testing-library.com/docs/ecosystem-user-event), not the 14.0.0-beta version described in the rest of the User Interactions section of the Testing Library docs.
:::
