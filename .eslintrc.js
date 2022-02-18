const { isNativeError } = require('util/types');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/rule-name': 'error',
    'import/extensions': ['error', 'never'],
  },
};
