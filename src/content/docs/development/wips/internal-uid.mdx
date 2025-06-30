---
title: Internal User Id
---

## Problem

Most Boba DB queries start by fetching the internal user id (the foreign key for
other tables) given the external firebase id obtained during the authentication
process. This makes queries cumbersome and repetitive, and unnecessarily couples
a large part of the server code with the authentication mechanism used.

## How authentication is enforced now

Currently, authentication mechanisms are defined in `handlers/auth.ts`, which
exports two relevant
[Express middlewares](https://expressjs.com/en/guide/using-middleware.html):

- `isLoggedIn`: checks whether the user is authenticated, and populates the
  `currentUser` field (of type `firebase.auth.DecodedIdToken`) in the request
  for following middlewares to use.
- `ensureLoggedIn`: bails out of further processing for logged out users and
  automatically responds with `401` or `403` responses as needed. This relies on
  `isLoggedIn` to check whether the user is authenticated.

Routes that call these two middlewares can then access `currentUser?.uid` to
retrieve the firebase id and pass it along the queries to the database.

Example route:

```javascript
router.get("/@me", ensureLoggedIn, async (req, res) => {
  const currentUserId: string = req.currentUser?.uid;
  const userData = await getUserFromFirebaseId({
      firebaseId: currentUserId,
    });
  // Rest of the code
}
```

Example query:

```sql
WITH
  logged_in_user AS
    (SELECT id FROM users WHERE users.firebase_id = ${firebase_id})
-- Bunch of stuff
SELECT *
FROM boards
LEFT JOIN logged_in_user ON 1 = 1
-- Bunch of stuff
```

## Solution

1. Query the DB for the internal user id in the `isLoggedIn` method of
   `handlers/auth.ts` after authentication is confirmed. The
   `getUserFromFirebaseId` method will work nicely for this.
2. Surface it through `req.currentUser.internalId`.
3. Store the `firebaseId` -> `userId` mapping in the Redis cache for quick
   access.
4. Slowly migrate queries to directly use the internal user id.

### Security considerations

The mapping from `firebaseId` to `userId` never changes. As long as we ensure to
rely on the cached data only after authentication is confirmed, the change has
no impact

At this point in time, deactivating accounts is handled by revoking firebase
access privileges and isn't reflected in the internal database. If this changes,
we'll need to ensure that administrative actions correctly update any relevant
cached detail, especially within `ensureLoggedIn`.
