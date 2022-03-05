---
sidebar_position: 1
---

# Intro to permissions

Permissions control which user(s) can execute specific actions, usually scoped to one or more entities. These entities include:

- **Realms:** e.g. invite user.
- **Boards:** e.g. edit sidebar.
- **Threads:** e.g. delete thread, move thread, edit default view.
- **Post:** e.g. edit content notices, edit categories, edit content.

The following permissions are granted by default:

- **Post owner permissions:** default permissions associated with the user who created a post (see: [`POST_OWNER_PERMISSIONS`](https://github.com/essential-randomness/bobaserver/blob/main/types/permissions.ts#L66)).
- **Thread owner permissions:** default permissions associated with the user who created a thread (see: [`THREAD_OWNER_PERMISSIONS`](https://github.com/essential-randomness/bobaserver/blob/main/types/permissions.ts#L76)).

Administrators can grant non-default permissions through roles. When a user is assigned a role, they automatically inherit the permissions associated with the role.

A full list of permissions is available in the `DbRolePermissions` enum at [`/types/permissions.ts`](https://github.com/essential-randomness/bobaserver/blob/main/types/permissions.ts).
