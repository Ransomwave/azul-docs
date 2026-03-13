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

- **`port`**: Port used for communication between the Desktop Daemon and Studio Plugin.
- **`syncDir`**: Directory where the DataModel will be mirrored.
- **`sourcemapPath`**: Path to the generated `sourcemap.json` file.
- **`scriptExtension`**: Script extension (`.luau` by default).
- **`fileWatchDebounce`**: Delay used for local file watcher events.
- **`deleteOrphansOnConnect`**: Delete unmapped files on full snapshot.
- **`suffixModuleScripts`**: Suffix ModuleScripts with `.module`.
- **`debugMode`**: Enable verbose daemon logs.

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
