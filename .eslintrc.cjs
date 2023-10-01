module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-curly-brace-presence": "error",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-boolean-value": "error",
    "prefer-template": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-tag-spacing": "error",
    "space-before-function-paren": "off",
    "import/no-absolute-path": "off", // vite pulbic absolute path
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
