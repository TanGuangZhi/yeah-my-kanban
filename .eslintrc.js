module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-unused-vars': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['evt'] }],
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'no-sparse-arrays': 1,
    'no-var': 0,
    'no-extra-boolean-cast': 1,
    'no-useless-escape': 1,
    'linebreak-style': ['off', 'unix', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prefer-const': 0,
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'space-before-function-paren': 0
  }
}
