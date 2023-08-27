---
sidebar_position: 3
---

# How to test endpoints

This document defines how to write tests for BobaBoard's REST API endpoints.

## What are tests

Tests ensures that software does what it's supposed to do. They can be used both to find new bugs and to avoid the accidental reintroduction of previously-known ones.

Tests are a fundamental part of creating stable, robust software, and their importance only increases as the project itself grows. Having good test coverage—that is, ensuring that a significant percentage of code is checked as part of the testing process—allows developers to create new features confidently, and reduces the amount of bugs that reach the end users. It also allows developer to make fundamental architectural changes without causing a [regression](https://en.wikipedia.org/wiki/Software_regression) (i.e. breakage) in functionality.

## API testing

While many [different types of tests](https://educative.io/blog/software-testing-types-101#functional-methods) exists, APIs are usually tested through integration tests. Integration tests ensure that multiple components (e.g. database, server) work together as expected. In the case of BobaBoard's API routes, integration tests cover the database and the server, with authentication and caching being instead [mocked](#mocking).

### Test cases

Tests are divided in test cases. Each test case represents a set of actions that verify that a single behavior of the software under test is working as intended. For example, a test case might verify that a `GET` request to the `/users/@me/` endpoint returns a `401` error when no authentication data is present. Another test case might verify that a `PATCH` request to the `/posts/:post_id/contribution` endpoint correctly updates the corresponding contribution when the `payload` includes a set of new tags.

Good test cases are small, self-contained, and independent. They should follow the `Arrange-Act-Assert` pattern., which divides each test case into 3 phases:

1. **Arrange:** Set up all necessary inputs and preconditions.
2. **Act:** Run the code under test.
3. **Assert:** That the result of the test is as expected.

Example:

```javascript
test("Returns data for the logged in user", async () => {
  // ARRANGE: Set the logged in user
  setLoggedInUser("logged_in_user_id");

  // ACT: Call the user data endpoint
  const response = await request(server.app).get("/@me");

  // ASSERT: Ensure that the user data received is as expected
  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    avatar_url: "/user_avatar.png",
    username: "user_name",
  });
});
```

### Mocking

Software might sometimes rely on external, complex services or library methods that are not suited for a testing environment (which might, for example, lack network connectivity or filesystem access). Rather than rely on these libraries or services, tests use _mock objects_, fake versions of these services and libraries that stand in for the real ones.

Because `mocks` are fake objects with no implementations, tests might need to define (if necessary) values returned by calls to mocked objects. If needed, tests can also make assertions on how the system under test interacted with the mocks, ensuring, for example, that certain methods have been called with the right parameters.

```javascript
  test("returns cached data for logged in user", async function () {
    setLoggedInUser("logged_in_user_id");
    const cachedData = JSON.stringify({
      avatar_url: "/this_was_cached.png",
      username: "the_cached_username",
    });
    // When the cache "hget" method is called, the mock will give back the fake cached data
    mocked(cache().hget).mockResolvedValueOnce(cachedData));

    const res = await request(server.app).get("/@me");

    expect(res.status).toBe(200);
    // Make sure that the returned result is equal to the fake cached data.
    // Note that if the cache were not called the result would be different
    expect(res.body).toEqual(cachedData);

    // Ensure that the cache "hget" method has been called once with the right parameters
    expect(cache().hget).toBeCalledTimes(1);
    expect(cache().hget).toBeCalledWith(CacheKeys.USER, "logged_in_user_id");
```

`Mocks` used in BobaBackend's testing include the `cache`, network requests (i.e. the `axios` library), and the authentication service.

## Testing BobaBackend's API Routes

TODO

<!--
https://www.npmjs.com/package/jest-extended

### Start a new server for the route you're testing

Call `startTestServer(router)`.

:::GOTCHA

Follow this syntax exactly, and do **not** destructure the object returned by `startTestServer(router)`. If you do, `app` will be undefined within your tests, and you're going to have a bad time.

:::

For more information, you can read [Jest's mocking guide](https://jestjs.io/docs/mock-functions)/


### How to add authentication

1. add `jest.mock("../../../handlers/auth");`
2. `setLoggedInUser`

### How to test cache -->
