# How to Add a New Role Permission

Permissions govern special actions users can take on posts, threads, boards or realms. They're usually associated with Roles, which can be assigned to users on either a board or realm basis.

## Available Role Permissions

The list of available role permissions is governed by the `role_permissions` type in BobaBoard's database, and the permissions associated with each roles are saved as an array in the `permissions` column of the `roles` table.

Examples of current permissions include:

- `edit_board_details`: roles with this permission can edit the sidebar on boards/realms they have this permission for.
- `post_as_role`: roles with this permission can be used as a posting identity on boards/realms they have this permission for (**DEPRECATION NOTICE:** this will likely be switched to a `role_identities` table containing which identities a role can post as).
- `edit_category_tags`/`edit_content_notices`: roles with this permission can edit categories/content notices for posts made in boards/realms they have this permission for.
- `move_threads`: roles with this permission can move threads from a board where they have this permission on, to another board where they have this permission on. (TODO: figure out whether this needs more fine-grained controls).

## Lifecycle of permissions

TODO: write something about how the flow works at a macrolevel.

## Adding a New Permission to Server

1. **Add the new permission in the `role_permissions` table.** (TODO: link to somewhere that points at where you can file tables in the codebase).
2. Add the permission in the `DbRolePermissions` enum in `Types.ts`. This should be spelled the same way as the permission in the DB.
3. Add the permission in either `PostPermissions`, `ThreadPermissions` or `BoardPermissions` in `Types.ts`.
4. In `permissions-utils.ts`, add the transformation from `DbRolePermission` to the corresponding server-side type in either `transformPostPermissions` or `transformThreadPermissions`.
5. You can now use methods like `getUserPermissionsForThread`, `getUserPermissionsForPost` and `getBoard` to check which permissions the user has before taking the appropriate actions.

## How to Test New Permissions

1. Modify the `role_insert.sql` file in `db/test_db_init` and assign the permission to one of the test users.
2. You can now use the permission in the appropriate tests.

## Adding a new Permission to Prod DB

1. Run the following query with the correct permission name:
   ```
   ALTER TYPE role_permissions ADD VALUE 'move_thread';
   ```
2. Add the permission to a role:
   ```
   UPDATE roles
   SET permissions = array_cat(permissions, ARRAY['move_thread'::role_permissions])
   WHERE roles.id = 1;
   ```
