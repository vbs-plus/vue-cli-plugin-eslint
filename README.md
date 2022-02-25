# @vbs/vue-cli-plugin-eslint

[![npm version](https://badge.fury.io/js/@vbs/vue-cli-plugin-eslint.svg)](https://badge.fury.io/js/@vbs/vue-cli-plugin-eslint)
[![GitHub issues](https://img.shields.io/github/issues/vbs-plus/vue-cli-plugin-eslint)](https://github.com/vbs-plus/vue-cli-plugin-eslint/issues)
[![GitHub forks](https://img.shields.io/github/forks/vbs-plus/vue-cli-plugin-eslint)](https://github.com/vbs-plus/vue-cli-plugin-eslint/network)
[![GitHub stars](https://img.shields.io/github/stars/vbs-plus/vue-cli-plugin-eslint)](https://github.com/vbs-plus/vue-cli-plugin-eslint/stargazers)
[![GitHub license](https://img.shields.io/github/license/vbs-plus/vue-cli-plugin-eslint)](https://github.com/vbs-plus/vue-cli-plugin-eslint/blob/main/LICENSE)

A Vue scaffold plugin based on prettier specification

### Support Language

- √ Vue 2.x + Typescript
- √ Vue 2.x + Javascript
- √ Vue 3.x + Typescript
- √ Vue 3.x + Javascript

## Front Work

### Install VScode Plugin

Search and install the following 2 plugins in your VScode plugin store

- ESLint: Check for errors in code writing
- Prettier: Unified formatting code style

### Configure VScode

In "file = > Preferences = > Settings = > Open settings (JSON)", add the following configuration:

```json
{
  "eslint.validate": [
    "vue",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Using tutorials

### Add @vbs/eslint to the project using Vue scaffolding plugins

```bash
vue add @vbs/eslint
```

### Installation options

- 🚩 Choose a version of Vue.js
- 🚩 Choose your project language
- 🚩 Sorts style property declarations and groups related properties?

##  Questions

Q: Why does the editor not prompt the code to report an error after I install it?

> A: After attempting to install, restart the vscode editor
