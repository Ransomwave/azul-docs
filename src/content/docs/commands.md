---
title: Commands
description: Learn about the various CLI commands available in Azul.
---

Learn about the various CLI commands available in Azul.

> - "`<` `>`" indicates required arguments.
> - "`[` `]`" indicates optional arguments.

## `azul`

The main command for interacting with Azul. Running `azul` without any arguments will simply start the Daemon.

```
azul [command] [options]
```

Options:
|Option|Short|Description|
|-----|----|-----------|
|`--help`|`-h`|Show help information for the `azul` command.|
|`--version`||Displays your Azul version.|
|`--sync-dir=<path>`||Specify the directory to sync files to.|
|`--port=<number>`||Specify the port number for the Daemon to listen on.|
|`--debug`||Enable debug mode for more verbose output.|
|`--no-warn`||Disable warning prompts for dangerous operations (like running in /sync or using build).|

You can combine any of these options with other `azul` subcommands and options. (Except for `--help` and `--version`.)

## `azul build`

Builds the Azul project in the current directory.

```
azul build [options]
```

Options:
| Option | Short | Description |
| --------------------- | ----- | ------------------------------------------------------------------- |
| `--rojo` | | Use the Rojo project compatibility mode. |
| `--rojo-project=FILE` | | Override the Rojo project file (default is `default.project.json`). |

## `azul push`

Pushes files from a source folder to a destination in the Azul sync directory.

```
azul push [options]
```

Options:
|Option|Short|Description|
|-----|----|-----------|
|`--source`|`-s`|Specify the source folder to push files from.|
|`--destination`|`-d`|Specify the destination path in the Azul sync directory. Use dot or slash notation.|
|`--destructive`||Wipe destination children before pushing new files.|
|`--no-place-config`||Do not read push mappings from the place ModuleScript.|
|`--rojo`||Use the Rojo project compatibility mode.|
|`--rojo-project=FILE`||Override the Rojo project file (default is `default.project.json`).|

> [!TIP]
> You can set up push mappings in the per-place daemon configuration to avoid specifying source/destination each time. See [Per-place Daemon Configuration](https://github.com/Ransomwave/azul/wiki/Advanced-Azul-usage) for more details.
