// @ts-check

import eslint from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import jsxA11y from "eslint-plugin-jsx-a11y"
import perfectionist from "eslint-plugin-perfectionist"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig(
  globalIgnores([".astro/", "dist/", "src/env.d.ts"]),
  {
    files: ["astro.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  eslintPluginAstro.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-interfaces": "error",
      "perfectionist/sort-exports": "error",
      "perfectionist/sort-imports": [
        "error",
        {
          internalPattern: ["^@/"],
          groups: [
            ["type", "builtin", "external"],
            ["type-internal", "internal"],
            [
              "type-parent",
              "type-sibling",
              "type-index",
              "parent",
              "sibling",
              "index",
            ],
            "unknown",
          ],
          type: "natural",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: [
            {
              groupName: "prioritised",
              elementNamePattern: ["^(client|is):", "^(id|name|property|src)$"],
            },
          ],
          groups: ["prioritised", "unknown", "shorthand-prop"],
        },
      ],
    },
  },
  jsxA11y.flatConfigs.recommended,
)
