module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
      'alert': true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 4, {
        'SwitchCase': 1
    }],
    'comma-dangle': ['error', 'never'],
    'no-extra-semi': 'error',
    'eol-last': 'warn',
    'space-before-function-paren': ['error', {
        'anonymous': 'always',
        'named': 'never'
    }],
    'space-before-blocks': 'error',
    'operator-linebreak': ['error', 'before'],
    'semi': ['error', 'always'],
    'curly': ['error', 'all']
  }
}
