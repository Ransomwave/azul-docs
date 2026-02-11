---
title: Advanced Azul Usage
description: Learn about advanced usage scenarios and configurations for Azul.
---

Azul can be used in more advanced ways to suit specific needs. This section covers some of the advanced usage scenarios and configurations.

## Per-place Daemon Configuration

Azul allows you to configure the daemon on a per-place basis. This means you can have different settings for different projects, while collaborators will automatically use the correct configuration when they access a place.

To set up per-place daemon configuration, create a ModuleScript in `ServerStorage.Azul` named `Config`. Inside this ModuleScript, return a table with the desired configuration options.

| Option                   | Type                      | Description                                                                                                                                                                          |
| ------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `port`                   | `number`                  | The TCP port the daemon should listen on. Defaults to `8080`.                                                                                                                        |
| `debugMode`              | `boolean`                 | If set to `true`, the daemon will emit extra debug logs during the Studio plugin/daemon handshake.                                                                                   |
| `deleteOrphansOnConnect` | `boolean`                 | If set to `true`, the daemon will delete files in the sync directory that are not mapped to any instances when it connects. This helps keep the local mirror clean between sessions. |
| `rojoMode`               | `boolean`                 | If set to `true`, enables Rojo compatibility mode for push operations.                                                                                                               |
| `pushMappings`           | `table` of configurations | Pre-specify how folders in your filesystem will be synced back into Roblox. **Lets you push using just `azul push`, instead of manually specifying paths each time.**                |

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

    -- One or more push mappings: each maps a local folder into a DataModel path.
    pushMappings = {
        -- Push mapping 1; map "Packages" folder to "ReplicatedStorage.Packages":
        {
            -- Local folder to push (relative to the repo root where you run `azul push`).
            source = "Packages",

            -- Destination path segments inside Studio (dot-separated in UI becomes array here).
            destination = { "ReplicatedStorage", "Packages" },

            -- If true, wipe all children under the destination before applying the push.
            destructive = true,

            -- Use Rojo compatibility mode when pushing.
            rojoMode = true,

        },

        -- Push mapping 2; map "src/Server" folder to "ServerScriptService.Server":
        {
            source = "src/Server",
            destination = { "ServerScriptService", "Server" },
            -- Keep existing children that aren't in this snapshot.
            destructive = false,
        },
    },
}
```

## Rojo Compatibility Mode

Azul can operate in Rojo Compatibility Mode, allowing you to work with existing Rojo projects seamlessly. This mode can be enabled using the `--rojo` flag in commands like `azul build` and `azul push`.

When using Rojo Compatibility Mode, Azul will read the Rojo project file (default is `default.project.json`) to determine how to map files to instances in Studio. You can also specify a different project file using the `--rojo-project=<ProjectFile>` option.

## Package Management

Using Package Managers (like [Wally](https://wally.run/)) can be a great way to manage dependencies in your Roblox projects. The `azul push` command can be used to push packages installed via Wally into your Roblox project.

Normally, Wally installs packages into a `Packages` folder in your project directory. To push these packages into Roblox, you can use the following command:

```
azul push -s Packages -d ReplicatedStorage.Packages --destructive --rojo
```

Since Wally is a Rojo-only tool, using `--rojo` is required to allow Azul to parse your packages correctly.

### Automating Package Pushes

To avoid manually specifying the source and destination each time you want to push packages, you can set up a push mapping in the per-place daemon configuration (as described in the [Per-place Daemon Configuration](#per-place-daemon-configuration) section). This way, you can simply run `azul push` without any additional arguments, and Azul will use the predefined mappings.

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
