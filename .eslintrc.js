module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'no-console': 'off',
    parserOptions: {
      sourceType: 'module',
    },
  },
};
