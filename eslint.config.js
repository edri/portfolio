import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactThreePlugin from '@react-three/eslint-plugin';

reactThreePlugin.configs.recommended;

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      '@react-three': reactThreePlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
