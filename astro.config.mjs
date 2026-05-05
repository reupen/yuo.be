import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import playformCompress from "@playform/compress"
import { defineConfig } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"

import fb2kTmGrammar from "./src/tm-grammars/fb2k.json"

export default defineConfig({
  site:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4321"
      : "https://yuo.be",
  integrations: [
    playformCompress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
    react(),
    mdx(),
  ],
  build: {
    assets: "_assets",
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["noreferrer"],
        },
      ],
    ],
    shikiConfig: {
      defaultColor: "light-dark()",
      langs: [fb2kTmGrammar],
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  vite: {
    assetsInclude: ["**/*.7z", "**/*.fb2k-component"],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "_assets/[hash]/[name][extname]",
        },
      },
    },
  },
  trailingSlash: "never",
})
