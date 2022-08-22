---
sidebar_position: 3
---

# Adding new permissions

The [`role_permissions_type` enum](https://github.com/BobaBoard/boba-backend/blob/main/db/init/020_roles_and_permissions.sql#L7) (in the database) defines the permissions that can be associated with roles. These permissions are mirrored in the server itself through the [`DbRolePermissions` enum](https://github.com/BobaBoard/boba-backend/blob/main/types/permissions.ts#L9).

The [`[Entity]Permissions` enums](https://github.com/BobaBoard/boba-backend/blob/main/types/permissions.ts#L28) (e.g. `ThreadPermissions`, `PostPermissions`) associate each entity with the corresponding permissions.

## Adding a New Permission to Server

1. Add a new type to the [`role_permissions_type` enum](https://github.com/BobaBoard/boba-backend/blob/main/db/init/020_roles_and_permissions.sql#L7) in the database.
2. Add the same permission to the [`DbRolePermissions` enum](https://github.com/BobaBoard/boba-backend/blob/main/types/permissions.ts#L9). Make sure the spelling is the same.
3. Add the permission to the corresponding [`[Entity]Permissions` enums](https://github.com/BobaBoard/boba-backend/blob/main/types/permissions.ts#L28).

## Adding a new permission to the production database

There is currently no available UI to add permissions to a role. The following queries can be used in its stead.

1. Run the following query with the correct permission name:
   ```
   ALTER TYPE role_permissions_type ADD VALUE 'move_thread';
   ```
2. Add the permission to a role:
   ```
   UPDATE roles
   SET permissions = array_cat(permissions, ARRAY['move_thread'::role_permissions_type])
   WHERE roles.id = 1;
   ```
