module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        parserOptions: {
            sourceType: 'module',
        },
    },
}
