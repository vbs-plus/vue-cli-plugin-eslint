module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "<%- parser -%>",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 260,
      },
    ],
  },
  extends: [
    <%_ eslintExtends.forEach(function (eslintExtend) { _%>
    "<%- eslintExtend %>",
    <%_ }); _%>
  ],
};
