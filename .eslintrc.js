module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never'
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'react/react-in-jsx-scope': 'off',
    // "no-console": "warn",
    // "no-unused-vars": "warn",
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-children-prop': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': ['warn', {
      namedComponents: ['arrow-function', 'function-declaration', 'function-expression'],
      unnamedComponents: ['function-expression', 'arrow-function']
    }],
    'react/jsx-no-useless-fragment': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
    'import/no-relative-packages': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};