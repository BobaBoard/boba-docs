# Internal User Id

## Problem

Most Boba DB queries start by fetching the internal user id (the foreign key for other tables) given the external firebase id obtained during the authentication process. This makes queries cumbersome and repetitive, and unnecessarily couples a large part of the server code with the authentication mechanism used.

## How authentication is enforced now

Currently, authentication mechanisms are defined in `handlers/auth.ts`, which exports two relevant [Express middlewares](https://expressjs.com/en/guide/using-middleware.html):

- `isLoggedIn`: checks whether the user is authenticated, and populates the `currentUser` field (of type `firebase.auth.DecodedIdToken`) in the request for following middlewares to use.
- `ensureLoggedIn`: bails out of further processing for logged out users and automatically responds with `401` or `403` responses as needed. This relies on `isLoggedIn` to check whether the user is authenticated.

Routes that call these two middlewares can then access `currentUser?.uid` to retrieve the firebase id and pass it along the queries to the database.

Example:

```javascript
router.get("/@me", ensureLoggedIn, async (req, res) => {
  const currentUserId: string = req.currentUser?.uid;
  const userData =
    await getUserFromFirebaseId({
      firebaseId: currentUserId,
    });
  // rest of the code
}
```

## Solution

1. Query for the internal user id in the authentication middleware
2. Store it in the Redis cache for quick access
3.

### Security considerations
