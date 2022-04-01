module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['standard', 'promise'],
  parser: 'babel-eslint',
  rules: {
    indent: 'off',
    'valid-typeof': 'off',
    'spaced-comment': 'off',
    'space-in-parens': 'off',
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'after'
        }
      }
    ]
  }
}