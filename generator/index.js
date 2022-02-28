module.exports = (api, { version, language, styleSort, gitHooks }) => {
  const packageJson = {
    scripts: {
      vbslint: "eslint . --ext .js,.ts,.vue --fix",
    },
    devDependencies: {
      eslint: "^8.9.0", // add eslint
      prettier: "^2.5.1", // add prettier
      "vue-eslint-parser": "^8.3.0", // add vue-eslint-parser
      "eslint-plugin-vue": "^8.5.0", // add eslint-plugin-vue
      "eslint-plugin-prettier": "^4.0.0", // add eslint-plugin-prettier
      "eslint-config-prettier": "^8.4.0", // add eslint-config-prettier, to resolve the conflict between prettier and eslint
    },
  };

  // add style format
  if (styleSort) packageJson.devDependencies["prettier-plugin-two-style-order"] = "^1.0.1";
  if (language === "typescript") {
    packageJson.devDependencies["@typescript-eslint/parser"] = "^5.12.1";
    packageJson.devDependencies["@typescript-eslint/eslint-plugin"] = "^5.12.1";
  } else {
    packageJson.devDependencies["@babel/core"] = "^7.17.5";
    packageJson.devDependencies["@babel/eslint-parser"] = "^7.17.0";
  }

  // add git hooks
  if (gitHooks) {
    packageJson["gitHooks"] = {
      "pre-commit": "lint-staged",
      "commit-msg": "node ./cli/commit.js",
    };
    // add git hooks
    packageJson.devDependencies["yorkie"] = "^2.0.0";
    // add lint-staged to lint git add .
    packageJson.devDependencies["lint-staged"] = "^12.3.4";
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

  // expand package.json
  api.extendPackage(packageJson);

  // render template folder
  api.render("./eslintTemplate", { eslintrc });
  // render gitHooks folder
  if (gitHooks) api.render("./gitTemplate");
};
