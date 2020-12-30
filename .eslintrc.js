const fs = require('fs');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    ...fs
      .readdirSync(__dirname + '/config')
      .filter(file => !file.startsWith('.') && file.endsWith('.js'))
      .map(ruleFileName => `./config/${ruleFileName}`),
  ],
  plugins: ['babel', '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {parser: '@typescript-eslint/parser'},
    },
  ],
};
