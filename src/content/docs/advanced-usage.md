---
title: Advanced Azul Usage
description: Per-place config, push mappings, and Rojo compatibility workflows.
---

Use these features when you want predictable team behavior across places and repeatable push workflows.

## Per-place Daemon Configuration

You can store daemon overrides inside Studio so collaborators get project-specific behavior automatically.

Create a ModuleScript at `ServerStorage.Azul.Config` that returns a table.

| Option                   | Type                      | Description                                                                                                                                                                          |
| ------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `port`                   | `number`                  | The TCP port the daemon should listen on. Defaults to `8080`.                                                                                                                        |
| `debugMode`              | `boolean`                 | If set to `true`, the daemon will emit extra debug logs during the Studio plugin/daemon handshake.                                                                                   |
| `deleteOrphansOnConnect` | `boolean`                 | If set to `true`, the daemon will delete files in the sync directory that are not mapped to any instances when it connects. This helps keep the local mirror clean between sessions. |
| `rojoMode`               | `boolean`                 | If set to `true`, enables Rojo compatibility mode for push operations.                                                                                                               |
| `pushMappings`           | `table` of configurations | Pre-specify local-to-Studio push paths so `azul push` can run without manual `-s/-d` arguments.                                                                                      |

```lua
-- ServerStorage/Azul/Config
-- Returned table is sent to the Azul daemon when it connects.

return {
    -- TCP port the daemon should be listening on (defaults to 8080 in the CLI config).
    port = 8080,

    -- Emit extra debug logs from the Studio plugin/daemon handshake.
    debugMode = false,

    -- When the daemon connects, delete files in the sync directory that are
    -- not mapped to any instances. Keeps the local mirror clean between sessions.
    deleteOrphansOnConnect = true,

    -- One or more push mappings.
    pushMappings = {
        -- Mapping 1: map "Packages" to ReplicatedStorage.Packages
        {
            source = "Packages",
            destination = { "ReplicatedStorage", "Packages" },
            destructive = true,
            rojoMode = true,
        },

        -- Mapping 2: map "src/Server" to ServerScriptService.Server
        {
            source = "src/Server",
            destination = { "ServerScriptService", "Server" },
            destructive = false,
        },
    },
}
```

## Rojo Compatibility Mode

Use Rojo mode when importing from Rojo-based folder/project setups.

```bash
azul build --rojo --rojo-project default.project.json
azul push --rojo -s Packages -d ReplicatedStorage.Packages
```

In this mode, Azul reads `default.project.json` (or your override path) to interpret structure.

## Package Management

For package managers like [Wally](https://wally.run/), use `azul push` to import packages into Studio.

Example:

```bash
azul push -s Packages -d ReplicatedStorage.Packages --destructive --rojo
```

Since Wally expects Rojo-style layouts, `--rojo` is usually required.

### Automating Package Pushes

Add a push mapping in per-place config so you can run plain `azul push`:

```lua
-- Example push mapping for Wally packages in the per-place daemon configuration
pushMappings = {
    {
        source = "Packages",
        destination = { "ReplicatedStorage", "Packages" },
        destructive = true,
        rojoMode = true,
    },
}
```
