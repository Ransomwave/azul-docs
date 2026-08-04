// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://azul-docs.vercel.app",
  integrations: [
    starlight({
      title: "Azul",
      logo: {
        src: "./src/assets/logo.png",
        replacesTitle: true,
      },
      customCss: ["/src/styles/custom.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Azul",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Ransomwave/azul",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Overview", slug: "" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Project Setup", slug: "getting-started/projects" },
            { label: "Updating Azul", slug: "getting-started/updating" },
          ],
        },
        {
          label: "Core Docs",
          items: [
            { label: "Commands", slug: "commands" },
            { label: "Configuration", slug: "configuration" },
            { label: "Sync Details", slug: "sync-details" },
            // { label: "Advanced Usage", slug: "advanced-usage" },
          ],
        },
        {
          label: "Advanced Usage",
          items: [
            { label: "Per-place config", slug: "advanced/place-daemon-config" },
            {
              label: "Rojo Compatibility",
              slug: "advanced/rojo-compatibility",
            },
            {
              label: "Package Management",
              slug: "advanced/package-management",
            },
            { label: "Distributing Code", slug: "advanced/distributing-code" },
          ],
        },
        // {
        //   label: "Project Format",
        //   items: [
        //     { label: "Commands", slug: "commands" },
        //     { label: "Configuration", slug: "configuration" },
        //     { label: "Sync Details", slug: "sync-details" },
        //     { label: "Advanced Usage", slug: "advanced-usage" },
        //   ],
        // },
        {
          label: "Guides",
          items: [{ label: "Common Workflows", slug: "guides/example" }],
        },
        {
          label: "Reference",
          items: [{ label: "CLI Quick Reference", slug: "reference/example" }],
        },
      ],
    }),
  ],
  redirects: {
    "/discord": "https://discord.gg/cRfsWKtjVc",
    "/plugin":
      "https://create.roblox.com/store/asset/79510309341601/Azul-Companion-Plugin",
  },
});
