# Azul Docs

Documentation site for Azul, built with Astro + Starlight.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Docs pages live in `src/content/docs/`.

- Sidebar/navigation is configured in `astro.config.mjs`.
- Home splash page is `src/content/docs/index.mdx`.
- Getting started content is in `src/content/docs/getting-started/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run check`   | Run Astro checks (if configured)             |

## Writing guidelines

- Keep docs user-facing and task-oriented.
- Prefer local doc links over external wiki links.
- Keep command examples copy-paste ready.
- Update both page content and sidebar labels when adding new sections.

## Useful links

- Starlight docs: https://starlight.astro.build/
- Astro docs: https://docs.astro.build/
