import { defineConfig } from "astro/config"
import compress from "astro-compress"

export default defineConfig({
  integrations: [
    compress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
  ],
  build: {
    assets: "_assets",
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
