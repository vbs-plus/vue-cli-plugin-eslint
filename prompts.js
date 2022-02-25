module.exports = [
  {
    name: "version",
    type: "list",
    message: "🚩 Choose a version of Vue.js",
    choices: [
      {
        name: "2.x",
        value: "2.x",
      },
      {
        name: "3.x",
        value: "3.x",
      },
    ],
  },
  {
    name: "language",
    type: "list",
    message: "🚩 Choose your project language",
    choices: [
      {
        name: "javascript",
        value: "javascript",
      },
      {
        name: "typescript",
        value: "typescript",
      },
    ],
  },
  {
    name: "styleSort",
    type: "confirm",
    message: "🚩 Sorts style property declarations and groups related properties?",
    default: true,
  },
];
