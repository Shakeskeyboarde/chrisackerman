/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      parserOptions: { sourceType: 'script' },
      env: { node: true, es2021: true },
      rules: {
        'import/no-extraneous-dependencies': ['warn'],
      },
      extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: __dirname },
      settings: { react: { version: 'detect' } },
      rules: {
        // Rationalize import/export to improve diffs, among other things.
        'import/no-extraneous-dependencies': ['warn', { devDependencies: false }],
        'import/no-default-export': 'warn',
        'import/prefer-default-export': 'off',
        'import/extensions': ['warn', 'never', { json: 'always' }],
        'import/exports-last': 'warn',
        'import/order': 'off',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',

        // Pick the "better" way where TS is flexible.
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/method-signature-style': 'warn',

        // Smell that code (or better yet, don't).
        '@typescript-eslint/no-floating-promises': 'warn',
      },
      plugins: ['simple-import-sort', 'only-warn'],
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
  ignorePatterns: ['node_modules', 'lib', 'out', 'dist'],
};
