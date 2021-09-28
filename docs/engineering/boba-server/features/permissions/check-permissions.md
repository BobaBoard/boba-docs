# How to check for an existing permissions

You can use the `hasPermission` method (exported by [`permission-utils`](https://github.com/essential-randomness/bobaserver/blob/master/utils/permissions-utils.ts#L13)) to check for a user permission. This requires:

- The [`DbRolePermissions`](https://github.com/essential-randomness/bobaserver/blob/master/Types.ts#L178) you want to check for.
- The list of the users' permissions. Right now, general permissions are associated with either the current Realm or Board, with Thread owners also being assigned some by default (like the tag edit ones).
