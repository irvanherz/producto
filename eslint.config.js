import pluginJs from "@eslint/js";
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic/jsx': stylisticJsx
    }
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/jsx/jsx-indent': ['error', 2],
    }
  }
];