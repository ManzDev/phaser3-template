module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "curly": ["error", "multi-line"],
    "max-lines": ["error", 300],
  },
};
