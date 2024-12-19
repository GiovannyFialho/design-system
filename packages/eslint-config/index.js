module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "import"],
  rules: {
    quotes: ["error", "double"], // Usa aspas duplas
    semi: ["error", "always"], // Exige ponto e vírgula no final
    indent: ["error", 2], // Indenta com 2 espaços
    "comma-dangle": ["error", "always-multiline"], // Virgula no final de objetos/matrizes multiline
    "arrow-parens": ["error", "always"], // Parênteses em arrow functions sempre
    "react/react-in-jsx-scope": "off", // Desnecessário no React 17+
    "react/prop-types": "off", // Desativa verificação de prop-types
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
