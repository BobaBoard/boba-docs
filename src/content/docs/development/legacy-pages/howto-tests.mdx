---
title: How to Run (and Write) Tests
sidebar:
  order: 10
---

## Backend

For backend testing, we use `mocha` + `chai`.

All files ending with `.test.ts` are automatically run as tests. As much as
possible, tests should be divided in different files according to the
functionality they're testing for (e.g. `boards/tests/pagination.tests.ts`,
`boards/tests/metadata.tests.ts`).

### How to Run Backend Tests

You can run tests with the following commands:

Tests use the same DB as the server! **You must run `yarn run start-db` before
tests.** If you made changes to the DB (for example, by navigating through the
boards in the local frontend), you will need to stop the DB and start it again.

Run all tests once: `yarn run tests`. Run all tests and watch for changes:
`yarn run tests:watch`. Run all tests in a single file and watch for changes:
`yarn run tests:file server/posts/tests/queries.test.ts` (change with
appropriate file path).

### How to Write Backend Tests

You can find a guide to testing in mocha
[here](https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e)
(but please don't install mocha globally). If you're writing a new test suite,
you can use this template to get started:

```jsx
import "mocha";
import { expect } from "chai";

import { runWithinTransaction } from "../../test-utils";

describe("Describe your test suite here", () => {
  it("Describe your regular test case here", async () => {
    // Run the code and save the result.
    // use expect() to check that the result is what's expected.
  });

  it("Describe your data-muting DB query test case here", async () => {
		await runWithinTransaction(async transaction => {
      // Run a query that modifies the DB.
      // Use expect() to check that the result is as expected.
      // At the end of this method, the DB will be restored to its original state.
		});
  });
}
```
