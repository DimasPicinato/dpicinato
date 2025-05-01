import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import importHelpers from 'eslint-plugin-import-helpers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
    },
    plugins: {
      '@typescript-eslint': tsPlugin, prettier: prettierPlugin, 'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import-helpers': importHelpers,
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'prettier/prettier': 'warn',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/react/',
            'module',
            ['parent', 'sibling', 'index'],
            '/assets/',
            '/types/',
            '/constants/',
            '/contexts/',
            '/hooks/',
            '/schemas/',
            '/libs/',
            '/services/',
            '/utils/',
            '/components/@shadcn/',
            '/components/',
            '/shared/',
            '/styles/',
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
    },
  },
  ...compat.extends('prettier'),
];

export default eslintConfig;
