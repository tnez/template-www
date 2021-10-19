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
      files: '**/*.test.ts',
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 0,
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
