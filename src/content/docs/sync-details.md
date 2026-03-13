---
title: Sync Details
description: Learn about how Azul syncs files between Studio and your local filesystem.
---

Azul mirrors the Studio hierarchy into your local `syncDir` (default: `./sync`).

Use this page to understand how instance names, nesting, and script types map to files.

## Basic mapping

Single Script instance:

- Studio: `ReplicatedStorage.Modules.MyServerScript`
- Filesystem: `sync/ReplicatedStorage/Modules/MyServerScript.server.luau`

## Nested instances under scripts

When a script has children, Azul creates a sibling folder with the script name.

Example:

- Studio: `ServerScriptService.Game.ParentScript.NestedScript`
- Filesystem:
  - `sync/ServerScriptService/Game/ParentScript.server.luau`
  - `sync/ServerScriptService/Game/ParentScript/NestedScript.server.luau`

## Script type suffixes

Azul determines script class from filename suffix:

| Studio        | Filesystem                   |
| ------------- | ---------------------------- |
| Server Script | `*.server.luau`              |
| Local Script  | `*.client.luau`              |
| Module Script | No suffix or `*.module.luau` |

## Important behavior notes

- Studio remains the source of truth for hierarchy and instance creation.
- Editing script contents locally syncs back to Studio.
- Creating arbitrary new local files does not always imply creating new Studio instances.
- Use `azul build` or `azul push` when you need to import local-only content.
