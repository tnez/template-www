module.exports = {
  prettier: true,
  semicolon: false,
  space: true,
  plugins: ['jest'],
  rules: {
    'import/extensions': 'off',
    'node/prefer-global/process': ['error', 'always'],
    'jest/no-disabled-tests': ['error'],
    'jest/no-focused-tests': ['error'],
    '@typescript-eslint/naming-convention': 'off',
  },
  ignores: ['graphql/types.ts'],
  overrides: [
    {
      files: '**/*.(spec|test).ts?(x)',
      rules: {
        'unicorn/prefer-node-protocol': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
      },
    },
    {
      files: 'next-env.d.ts',
      rules: {
        '@typescript-eslint/triple-slash-reference': 0,
      },
    },
    {
      files: '*.config.js',
      rules: {
        'object-shorthand': 0,
        'unicorn/prefer-module': 0,
      },
    },
  ],
}
