module.exports = {
  "extends": ["semistandard", "plugin:react/recommended"],
  "installedESLint": true,
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "standard",
    "promise",
    "react"
  ],
  "rules": {
    "prefer-const": "error",
    "space-before-function-paren": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "jsx-a11y/img-has-alt": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "react/prop-types": "off",
    "no-multiple-empty-lines": "off",
    "react/display-name": "off",
    "react/jsx-curly-spacing": ["error", "never"]
  },
  "globals": {
    "it": false
  }
}
