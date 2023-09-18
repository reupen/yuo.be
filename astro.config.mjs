import { defineConfig } from "astro/config"
import compress from "astro-compress"
import image from "@astrojs/image"

export default defineConfig({
  integrations: [
    image(),
    compress({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: false,
      SVG: true,
    }),
  ],
  vite: {
    assetsInclude: ["**/*.7z", "**/*.fb2k-component"],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: `_assets/[hash]/[name][extname]`,
        },
      },
    },
  },
  trailingSlash: "never",
})
