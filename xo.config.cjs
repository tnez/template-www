module.exports = {
  prettier: true,
  semicolon: false,
  space: true,
  plugins: ['jest'],
  rules: {
    'node/prefer-global/process': ['error', 'always'],
    'jest/no-focused-tests': ['error'],
    '@typescript-eslint/naming-convention': 'off',
  },
  overrides: [
    {
      files: '**/*.(spec|test).ts?(x)',
      rules: {
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
  ],
}
