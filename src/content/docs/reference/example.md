---
title: CLI Quick Reference
description: Fast lookup for common Azul commands.
---

## Start sync

```bash
azul
```

## Build local files into Studio

```bash
azul build
azul build --from-sourcemap sourcemap.json
azul build --rojo --rojo-project default.project.json
```

## Push a specific folder

```bash
azul push -s src/Server -d ServerScriptService.Server
azul push -s Packages -d ReplicatedStorage.Packages --destructive --rojo
```

## Generate sourcemap

```bash
azul pack
azul pack -o sourcemap.json --scripts-only
```

## Open config

```bash
azul config
azul config --path
```

## Global options

- `--debug` verbose logs
- `--no-warn` skip confirmations
- `--sync-dir` override sync folder
- `--port` override daemon port

For full explanations, see [Commands](/commands/).
