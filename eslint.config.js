import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import stylistic from '@stylistic/eslint-plugin';

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended
});

export default [
  ...compat.extends("standard-with-typescript"),
  pluginReactConfig,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-multiple-empty-lines": "off",
      "prefer-const": "error",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/jsx-wrap-multilines": [
        "warn",
        {
          "declaration": "parens-new-line",
          "assignment": "parens-new-line",
          "return": "parens-new-line",
          "arrow": "parens-new-line",
          "condition": "parens-new-line",
          "logical": "parens-new-line",
          "prop": "parens-new-line"
        }
      ],
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
    },
    plugins: {
      '@stylistic': stylistic
    }
  },
];
