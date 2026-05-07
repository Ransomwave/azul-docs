---
title: Configuration
description: Configure daemon defaults and plugin/place settings.
---

Azul has two configuration layers:

1. **CLI user config** (on your machine): default daemon behavior.
2. **Per-place config** (inside Studio): project-specific overrides and push mappings.

## CLI user config

Use:

```bash
azul config
```

to open your config file in your default editor, or:

```bash
azul config --path
```

to print its location.

Common fields:

| Field                        | Type      | Description                                                               |
| ---------------------------- | --------- | ------------------------------------------------------------------------- |
| **`daemonPath`**             | `string`  | Path to the Desktop Daemon executable.                                    |
| **`port`**                   | `number`  | Port used for communication between the Desktop Daemon and Studio Plugin. |
| **`syncDir`**                | `string`  | Directory where the DataModel will be mirrored.                           |
| **`sourcemapPath`**          | `string`  | Path for the generated `sourcemap.json` file.                             |
| **`scriptExtension`**        | `string`  | Script extension (`.luau` by default).                                    |
| **`fileWatchDebounce`**      | `number`  | Delay used for local file watcher events.                                 |
| **`deleteOrphansOnConnect`** | `boolean` | Delete unmapped files on full snapshot.                                   |
| **`suffixModuleScripts`**    | `boolean` | Suffix ModuleScripts with `.module`.                                      |
| **`checkForUpdates`**        | `boolean` | Whether to check for updates on the NPM registry.                         |
| **`debugMode`**              | `boolean` | Enable verbose daemon logs.                                               |

## Plugin settings

Plugin settings are edited in the plugin UI in Studio.

### Global plugin settings

- **Debug Mode**: Extra plugin-side logging.
- **Silent Mode**: Reduces non-error plugin logs.

### Global or project-scoped settings

- **Scope**: Apply as global defaults or per-place settings.
- **WebSocket URL**: Usually `ws://localhost:<port>` and should match daemon port.
- **Service List** + **Service List Type**: Include/exclude root services.
- **Excluded Parents**: Exclude paths (for example plugin-managed folders).

## Per-place daemon config (ServerStorage.Azul.Config)

For team workflows, you can store daemon overrides and `pushMappings` inside the place.

See [Advanced Usage](/advanced-usage/) for a full example table and Lua config snippet.
