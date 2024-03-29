const javascript = require('./rules/javascript');
const lit = require('./rules/lit');
const react = require('./rules/react');
const typescript = require('./rules/typescript');

const javascriptBasePreset = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};

const typescriptBasePreset = {
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ...javascriptBasePreset.parserOptions,
    tsconfigRootDir: './',
    project: [ './tsconfig.json' ],
  },
};

module.exports = {
  js: {
    default: {
      ...javascriptBasePreset,
      files: '*.js',
      plugins: javascript.plugins,
      rules: javascript.rules,
    },
  },
  jsx: {
    default: {
      ...javascriptBasePreset,
      files: '*.jsx',
      parserOptions: {
        ...javascriptBasePreset.parserOptions,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        ...javascript.plugins,
        ...react.plugins,
      ],
      rules: javascript.plugins,
    },
  },
  ts: {
    default: {
      ...typescriptBasePreset,
      files: '*.ts',
      parser: typescript.parser,
      plugins: typescript.plugins,
      rules: typescript.rules,
    },
  },
  tsx: {
    default: {
      ...typescriptBasePreset,
      files: '*.tsx',
      parser: typescript.parser,
      plugins: [
        ...typescript.plugins,
        ...react.plugins,
        ...lit.plugins,
      ],
      rules: {
        ...typescript.rules,
        ...react.rules,
        ...lit.rules,
      },
    },
  },
};
