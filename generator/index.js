module.exports = (api, { version, language, styleSort }) => {
  const package = {
    scripts: {
      vbslint: "eslint . --ext .js,.ts,.vue --fix",
    },
    gitHooks: {
      "pre-commit": "lint-staged",
      "commit-msg": "node ./cli/commit.js",
    },
    devDependencies: {
      eslint: "^8.9.0", // add eslint
      yorkie: "2.0.0", // add git hooks
      prettier: "^2.5.1", // add prettier
      "lint-staged": "^12.3.4", // add lint-staged to lint git add .
      "vue-eslint-parser": "^8.3.0", // add vue-eslint-parser
      "eslint-plugin-vue": "^8.5.0", // add eslint-plugin-vue
      "eslint-plugin-prettier": "^4.0.0", // add eslint-plugin-prettier
      "eslint-config-prettier": "^8.4.0", // add eslint-config-prettier, to resolve the conflict between prettier and eslint
    },
  };

  // add style format
  if (styleSort) package.devDependencies["prettier-plugin-two-style-order"] = "^1.0.1";
  if (language === "typescript") {
    package.devDependencies["@typescript-eslint/parser"] = "^5.12.1";
    package.devDependencies["@typescript-eslint/eslint-plugin"] = "^5.12.1";
  } else {
    package.devDependencies["@babel/core"] = "^7.17.5";
    package.devDependencies["@babel/eslint-parser"] = "^7.17.0";
  }

  const eslintrc = {
    parser: language === "typescript" ? "@typescript-eslint/parser" : "@babel/eslint-parser",
    extends: [
      version === "2.x" ? "plugin:vue/recommended" : "plugin:vue/vue3-recommended",
      "eslint:recommended",
      ...(language === "typescript" ? ["plugin:@typescript-eslint/recommended"] : []),
      "plugin:prettier/recommended",
    ],
  };

  // render template folder
  api.render("./template", { eslintrc });
  // expand package.json
  api.extendPackage(package);
};
