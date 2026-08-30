---
title: Configuration
description: Configure daemon defaults and plugin/place settings.
---

Azul has two configuration layers:

1. **CLI user config** (on your machine): default daemon behavior.
2. **Per-place config** (inside Studio): project-specific overrides and push mappings.

## CLI user config

To open your config in your default editor, run:

```bash
azul config
```

To print the path to your config file, run:

```bash
azul config --path
```

| Field                            | Type      | Description                                                               |
| -------------------------------- | --------- | ------------------------------------------------------------------------- |
| **`port`**                       | `number`  | Port used for communication between the Desktop Daemon and Studio Plugin. |
| **`syncDir`**                    | `string`  | Directory where the DataModel will be mirrored.                           |
| **`sourcemapPath`**              | `string`  | Path for the generated `sourcemap.json` file.                             |
| **`scriptExtension`**            | `string`  | Script extension (`.luau` by default).                                    |
| **`fileWatchDebounce`**          | `number`  | Delay used for local file watcher events.                                 |
| **`deleteOrphansOnConnect`**     | `boolean` | Delete unmapped files on full snapshot.                                   |
| **`suffixModuleScripts`**        | `boolean` | Whether to suffix ModuleScripts with `.module` (e.g. `Foo.module.luau`).  |
| **`checkForUpdates`**            | `boolean` | Whether to check for updates on the NPM registry.                         |
| **`debugMode`**                  | `boolean` | Enable verbose daemon logs.                                               |
| **`liveFsSync.enabled`**         | `boolean` | Replicate filesystem actions (create, delete) to Studio during live sync  |
| **`liveFsSync.usePolling`**      | `boolean` | Use polling for file watching instead of native OS events.                |
| **`liveFsSync.pollingInterval`** | `number`  | Polling interval in milliseconds.                                         |

## Plugin settings

Plugin settings are edited in the plugin UI in Studio.

## Per-place daemon config (ServerStorage.Azul.Config)

This file can be generated through the plugin UI by scrolling down, and clicking on "Open Place Configuration"

_See the dedicated [Per-place Daemon Config](/place-daemon-config/) page for more information on this feature._
