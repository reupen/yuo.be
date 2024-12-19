// @ts-check

import eslint from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import jsxA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"

export default tseslint.config({
  ignores: [".astro", "src/env.d.ts"],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    eslintPluginAstro.configs.recommended,
    jsxA11y.flatConfigs.recommended,
  ],
})
