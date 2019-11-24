module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-console': ['error', { allow: ['info', 'error', 'warn'] }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    'prettier/prettier': 'error',
  },
}
