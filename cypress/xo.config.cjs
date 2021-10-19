const parentConfig = require('../xo.config.cjs')

module.exports = {
  ...parentConfig,
  globals: ['cy'],
  rules: {
    ...parentConfig.rules,
    'max-nested-callbacks': 0,
  },
}
