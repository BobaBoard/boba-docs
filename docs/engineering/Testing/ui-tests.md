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
