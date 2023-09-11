module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@products', './src']],
        extensions: ['.js', '.jsx', '.json', '.scss', '.svg', '.png'],
      },
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:css/recommended',
  ],
  plugins: [
    'react',
    'unused-imports',
    'simple-import-sort',
    'css',
    'no-relative-import-paths',
    'unicorn',
    'folders',
  ],
  rules: {
    // TODO: THIS IS IMP
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelAttributes: ['htmlFor', 'id'],
        assert: 'htmlFor',
        depth: 25,
      },
    ],
    // ENDS ---
    'react/no-unused-prop-types': 'error',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      { allowExpressionValues: true },
    ],
    'jsx-a11y/click-events-have-key-events': 'error',
    'import/no-unresolved': 'error',
    'react/require-default-props': 'error',
    'react/no-unescaped-entities': 'error',
    'import/order': 'off',
    'no-restricted-exports': 'off',
    'no-unused-vars': 'error',
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': 'off',
    'react/button-has-type': 'error',
    'folders/match-regex': [2, '^[A-Z][a-z]+(?:[A-Z][a-z]+)*$', '/src/'],
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      { allowSameFolder: true, rootDir: 'src', prefix: '@products' },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
        },
        ignore: ['index.jsx', '\\.js$', '\\.test.jsx$'],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // increase the severity of rules so they are auto-fixable
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` and `react-dom` come first.
          ['react', 'react-dom'],
          // Packages `react` related packages.
          ['^react-', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Components only
          ['@products/Components-'],
          // Page & Routes only
          ['@products/Pages', '@products/Routes'],

          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(svg)$', '^.+\\.?(png)$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
}
