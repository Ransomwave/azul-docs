---
title: Sync Details
description: Learn about how Azul syncs files between Studio and your local filesystem.
---

Understand how Azul syncs files from Studio to your local filesystem.

### Simple Scripts

An example of a single server Script instance:

- Roblox: `ReplicatedStorage.Modules.MyServerScript`
- Filesystem: `sync\ReplicatedStorage\Modules\MyServerScript.server.luau`

### Nested Scripts

Nested instances are represented as a new folder besides the parent Script. For example, a Script nested inside another Script:

- Roblox: `ServerScriptService.Game.ParentScript.NestedScript`
- Filesystem:
  - `sync\ServerScriptService\Game\ParentScript.server.luau`
  - `sync\ServerScriptService\Game\ParentScript\NestedScript.server.luau`

### Script Types

Script types are indicated by suffixes:

| Studio        | Filesystem                   |
| ------------- | ---------------------------- |
| Server Script | `*.server.luau`              |
| Local Script  | `*.client.luau`              |
| Module Script | No suffix or `*.module.luau` |
