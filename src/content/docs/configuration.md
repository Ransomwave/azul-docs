---
title: Configuration
description: Configure Azul to suit your needs.
---

Configure Azul to your liking!

## Daemon

Edit `src/config.ts` to customize:

- **`port`**: Port used for communication between the Desktop Daemon and Studio Plugin.
- **`syncDir`**: Directory where the DataModel will be mirrored.
- **`sourcemapPath`**: Path to the generated `sourcemap.json` file.
- **`scriptExtension`**: (`.lua` vs `.luau`)
- **`deleteOrphansOnConnect`**: Whether to delete unmapped files in the sync directory after a new connection/full snapshot. These files are those that don't correspond to any instance in the DataModel. They could be leftovers from previous syncs or files created manually in the sync directory.
- **`debugMode`**: Enable or disable debug logging.

## Plugin

The plugin's settings can be edited from the GUI or by editing `AzulSync.luau`:

The following settings are always "Global":

- **Debug Mode**: Enable or disable debug logging.
- **Silent Mode**: Suppress all Plugin print statements except for errors.

The following settings can be set to a "Global" or "Project" scope:

- **Scope**: Whether settings should be global (applies to all projects) or per-project (applies only to the currently opened Place).
- **Websocket URL**: Port used for communication between the Desktop Daemon and Studio Plugin. (`ws://localhost:yourport`)
- **Service List**: List of services to include/exclude based on the selected List Type.
  - **Service List Type`**: Whether the service list is treated as a _whitelist_ or _blacklist_.
- **Excluded Parents**: Parents to exclude from syncing _(i.e. `ServerStorage.RecPlugins`, a Folder managed by an external plugin you don't want to sync)_.
