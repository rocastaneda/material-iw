module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "jest/globals": true
  },
  "globals": {},
  "plugins": ["jest", "prettier", "react", "react-hooks"],
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  "rules": {
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "amd": true,
        "caseSensitive": true,
        "ignore": ["@"]
      }
    ],
    "prettier/prettier": "error",
    "react/prop-types": [
      "error",
      {
        "ignore": ["server", "location", "context"],
        "customValidators": [],
        "skipUndeclared": false
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "consistent-return": "off",
    "default-case": "off",
    "function-paren-newline": "off",
    "import/extensions": "off",
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "linebreak-style": "off",
    "new-cap": "off",
    "no-alert": "off",
    "no-confusing-arrow": "off",
    "no-else-return": "off",
    "no-loop-func": "off",
    "no-mixed-operators": "off",
    "no-multi-assign": "off",
    "no-nested-ternary": "off",
    "no-new": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-restricted-globals": "off",
    "no-restricted-properties": "off",
    "no-return-assign": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "radix": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/button-has-type": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "react/jsx-curly-newline": "off"
  }
}
