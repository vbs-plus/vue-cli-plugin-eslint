const fs = require("fs");

module.exports = (api, { version, language, styleSort, gitHooks }) => {
  api.extendPackage({ scripts: { vbslint: "eslint . --ext .js,.ts,.vue --fix" } });

  // 添加基础包
  api.extendPackage({
    devDependencies: {
      eslint: "^8.10.0",
      prettier: "^2.5.1",
      "vue-eslint-parser": "^8.3.0",
      "eslint-plugin-vue": "^8.5.0",
      "eslint-plugin-prettier": "^4.0.0",
      "eslint-config-prettier": "^8.5.0",
    },
  });

  // 添加 styleSort 包
  if (styleSort) {
    api.extendPackage({
      devDependencies: {
        "prettier-plugin-two-style-order": "^1.0.1",
      },
    });
  }

  // 添加 ts/js 解析包
  if (language === "typescript") {
    api.extendPackage({
      devDependencies: {
        "@typescript-eslint/parser": "^5.14.0",
        "@typescript-eslint/eslint-plugin": "^5.14.0",
      },
    });
  } else {
    api.extendPackage({
      devDependencies: {
        "@babel/core": "^7.17.5",
        "@babel/eslint-parser": "^7.17.0",
      },
    });
  }

  // 增加 gitHooks
  if (gitHooks) {
    api.extendPackage({
      gitHooks: {
        "pre-commit": "lint-staged",
        "commit-msg": "node ./cli/commit.js",
      },
      devDependencies: {
        yorkie: "^2.0.0",
        "lint-staged": "^12.3.5",
      },
    });
    api.render("./gitTemplate");
  }

  api.render("./eslintTemplate", {
    eslintrc: {
      parser: language === "typescript" ? "@typescript-eslint/parser" : "@babel/eslint-parser",
      extends: [
        version === "2.x" ? "plugin:vue/recommended" : "plugin:vue/vue3-recommended",
        "eslint:recommended",
        ...(language === "typescript" ? ["plugin:@typescript-eslint/recommended"] : []),
        "plugin:prettier/recommended",
      ],
    },
  });
};
