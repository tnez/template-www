const parentConfig = require('../xo.config.cjs')

module.exports = {
  ...parentConfig,
  globals: ['cy'],
  rules: {
    ...parentConfig.rules,
    '@typescript-eslint/triple-slash-reference': 0,
    'import/extensions': 0,
    'import/no-unassigned-import': 0,
    'max-nested-callbacks': 0,
    'node/file-extension-in-import': 0,
  },
}
