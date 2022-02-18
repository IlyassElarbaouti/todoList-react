module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
  },
};
