module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": "error",
        "react/prop-types": "off",
    },
};
