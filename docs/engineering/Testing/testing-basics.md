---
id: testing-basics
title: Testing Basics
---

Tests are code that we write, which we can run on our application code to make sure it's behaving as we are expecting, and that any changes we've made don't have unintended consequences. The goal of tests is to catch bugs before they get to the production site and break things.

As the scale of our application grows, it becomes more and more time-consuming and unwieldy to try to test every aspect of the site manually every time we make changes. Tests let us think through what we need to check to make sure a specific aspect or part of the site is working correctly, just the once while we are writing the test. From then on, the tests can be run routinely and we only have to think about it if they one of them fails, telling us there's a problem in a particular place.

If you are working on changes, or a new feature, please add appropriate tests and run the existing tests on your changes.

:::tip
At the moment, there are many existing parts of the Boba codebase that need tests written for them. If you're a beginner looking to get involved, writing tests for the existing code can be a great way to get a sense of how things work while contributing critical infrastructure.
:::

We use a number of techniques and tools for testing different parts of the codebase. The following pages will outline how to write different kinds of tests.
