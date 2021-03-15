module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "extends": [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    "rules": {
      "prettier/prettier": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ]
    },
}
