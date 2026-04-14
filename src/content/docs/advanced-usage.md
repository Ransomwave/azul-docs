---
title: Advanced Azul Usage
description: Per-place config, push mappings, and Rojo compatibility workflows.
---

Use these features when you want predictable team behavior across places and repeatable push workflows.

## Per-place Daemon Configuration

You can store Daemon setting overrides inside Studio. This allows you to specify settings like push mappings that everyone on the project can use without manual setup.

This configuration should be placed in a ModuleScript at `ServerStorage.Azul.Config`.

When the Daemon starts, it looks for this ModuleScript and merges its returned table with the CLI config.

### Global options

| Option         | Type                     | Description                                                                                        |
| -------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| `port`         | `number`                 | The TCP port the daemon should listen on.                                                          |
| `debugMode`    | `boolean`                | If set to `true`, the daemon will emit extra debug logs during the Studio plugin/daemon handshake. |
| `pushMappings` | `table` of push mappings | Pre-specify local-to-Studio push paths so `azul push` can run without manual `-s/-d` arguments.    |

### Push Mapping Options

Each push mapping supports the following options:
| Option | Type | Description |
|--------|------|-------------|
| `deleteOrphansOnConnect` | `boolean` | If set to `true`, the daemon will delete files in the sync directory that are not mapped to any instances when it connects. This helps keep the local mirror clean between sessions. |
| `rojoMode` | `boolean` | If set to `true`, enables Rojo compatibility mode for push operations. |
| `fromSourcemap` | `string` | Path to a JSON file containing sourcemap information for resolving local paths to Studio instances. |

### Example Config:

```lua
-- ServerStorage.Azul.Config
-- Returned table is sent to the Azul daemon when it connects.

return {
    -- TCP port the daemon should be listening on (defaults to 8080 in the CLI config).
    port = 8080,

    -- When the daemon connects, delete files in the sync directory that are
    -- not mapped to any instances. Keeps the local mirror clean between sessions.
    deleteOrphansOnConnect = true,

    -- Push mappings allow you to pre-specify local-to-Studio push paths so you can run `azul push` without manual `-s/-d` arguments.
    pushMappings = {
        -- Mapping 1: Packages from the tool "Wally", in Rojo mode
        {
            source = "./Packages",
            destination = { "ReplicatedStorage", "Packages" },
            destructive = true,
            rojoMode = true,
        },

        -- Mapping 2: A local "Libraries" folder that contains utility modules using Azul-style sourcemaps
        {
            source = "./Libraries",
            destination = { "ServerScriptService", "Libraries" },
            destructive = false,
            fromSourcemap = "./Libraries/sourcemap.json",
        },
    },
}
```

## Rojo Compatibility Mode

Use Rojo mode when importing from Rojo-based folder/project setups.

```bash
azul build --rojo
azul build --rojo --rojo-project default.project.json
azul push -s Packages -d ReplicatedStorage.Packages --rojo
```

In this mode, Azul reads `default.project.json` (or the provided project file) to interpret Rojo-style structure.

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
        source = "./Packages",
        destination = { "ReplicatedStorage", "Packages" },
        destructive = true,
        rojoMode = true,
    },
}
```
