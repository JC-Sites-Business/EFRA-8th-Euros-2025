module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tsconfig.node.json', '.prettierrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // Fix - this is causing linting error on .tsx files but unsure how to resolve.
    // project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    'react-refresh/only-export-components': 'error',
    '@typescript-eslint/ban-ts-comment': "off",
    '@typescript-eslint/consistent-type-definitions': "off",
    '@typescript-eslint/restrict-template-expressions': "off",
    '@typescript-eslint/prefer-nullish-coalescing': "off",
    '@typescript-eslint/strict-boolean-expressions': "off",
    '@typescript-eslint/unbound-method': "off",
    '@typescript-eslint/no-unsafe-argument': "off",
    '@typescript-eslint/no-floating-promises': "off",
    '@typescript-eslint/no-misused-promises': "off",
    'no-prototype-builtins': "off"
  },
  overrides: [
    {
      files: ["src/**/*.ts,tsx"]
    }
  ]
}
