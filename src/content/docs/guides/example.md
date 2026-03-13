---
title: Common Workflows
description: Practical workflows for daily Azul usage.
---

## Daily coding loop

1. Start daemon in your project folder:

   ```bash
   azul
   ```

2. Connect in Studio.
3. Edit scripts in Studio or your editor.
4. Commit local file changes as usual.

## Import a package folder into Studio

Use this when you installed dependencies locally and want them in `ReplicatedStorage.Packages`.

```bash
azul push -s Packages -d ReplicatedStorage.Packages --destructive --rojo
```

Then add a `pushMappings` entry in per-place config to avoid repeating flags.

## Team setup with consistent behavior

1. Create `ServerStorage.Azul.Config` in the place.
2. Define `port`, `deleteOrphansOnConnect`, and `pushMappings`.
3. Ask teammates to use normal `azul` / `azul push` commands.

This keeps project behavior versioned with the place.

## Troubleshooting checklist

- Confirm daemon port matches plugin WebSocket URL.
- Run `azul --debug` for detailed logs.
- Verify `syncDir` and `sourcemapPath` in `azul config`.
- Reconnect plugin after changing config.

For command-level details, see [Commands](/commands/).
