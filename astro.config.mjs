// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://azul-docs.vercel.app",
  integrations: [
    starlight({
      title: "Azul",
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
            { label: "Advanced Usage", slug: "advanced-usage" },
          ],
        },
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
});
