module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'extends': 'eslint:recommended',
  'plugins': ['babel'],
  'rules': {
    'import/no-unresolved': 'off',
    'semi': ['error', 'always'],
    'max-len': ['error', 120],
    'object-curly-spacing': ["error", "always"]
  },
  'globals': {
    'resolve': true, // enonic global
    'Java': true,
    'window': true, // for the browser
    'exports': true, // enonic global
    'Promise': true, // polyfill added
    'log': true, // enonic global
    'app': true, // enonic global
    'fetch': true // polyfilled global function
  }
};
