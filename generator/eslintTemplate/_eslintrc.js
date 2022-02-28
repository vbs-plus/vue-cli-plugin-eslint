module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "<%- eslintrc['parser'] -%>",
  },
  rules: {
    "@typescript-eslint/no-var-requires": [0],
    "prettier/prettier": [
      "error",
      {
        printWidth: 220,
        endOfLine: "auto",
      },
    ],
  },
  extends: [
    <%_ eslintrc['extends'].forEach(function (item) { _%>
    "<%- item %>",
    <%_ }); _%>
  ],
};
