const javascript = require('./javascript');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [ ...javascript.plugins, '@typescript-eslint' ],
  rules: {
    ...javascript.rules,

    // Wait for improve
    'no-undef': 'off', // NodeJS, BufferEncoding, etc. are not supported

    // TypeScript rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [ 'error', { default: 'array-simple' } ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'off', // Not using tslint
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off', // Not see the benefits of using type import.
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [ 'error', { overrides: { constructors: 'no-public' } } ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Index signature
          'signature',

          // Fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          // Constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',

          // Methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',
        ],
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': 'off', // I prefer compound syntax like "commandData_base64". Therefore, the regular expression becomes complicated. You may enable this feature if eslint is able to edit the comments on error messages
    // [
    //   'error',
    //   {
    //     Selector: 'variableLike',
    //     Format: null,
    //     Custom: { regex: variableRegex, match: true },
    //   },
    // ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off', // This rule is redundant if you do not intentionally handle the error.
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'off', // Can't use Promise<void[]> when using Promise.all
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off', // This rule is annoying for properties that are certain to be initialized by something other than the constructor
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-type-alias': 'off', // Not support template literal type
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': [ 'error', { allowConstantLoopConditions: true } ],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off', // Setting all enum to default values is a bit much
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // The error could not be resolved using types such as "DeepReadonly". "no-param-reassign" is enough
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': [ 'error', { allowNumber: true, allowBoolean: true } ],
    '@typescript-eslint/sort-type-union-intersection-members': 'off', // This rule is a hindrance if sorting by role
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'off', // It is better to pass the following arguments to tsconfig. --noImplicitAny and/or --strictPropertyInitialization
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',

    // Extension rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': javascript.rules['brace-style'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': javascript.rules['comma-dangle'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': javascript.rules['comma-spacing'],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': javascript.rules['default-param-last'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': javascript.rules['dot-notation'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': javascript.rules['func-call-spacing'],
    'indent': 'off',
    '@typescript-eslint/indent': javascript.rules.indent,
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': javascript.rules['init-declarations'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': javascript.rules['keyword-spacing'],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': javascript.rules['lines-between-class-members'],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': javascript.rules['no-array-constructor'],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': javascript.rules['no-dupe-class-members'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': javascript.rules['no-empty-function'],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': javascript.rules['no-extra-parens'],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': javascript.rules['no-extra-semi'],
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': javascript.rules['no-invalid-this'],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': javascript.rules['no-loop-func'],
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': javascript.rules['no-loss-of-precision'],
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': javascript.rules['no-magic-numbers'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': javascript.rules['no-redeclare'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': javascript.rules['no-shadow'],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off', // Not compatible with TS3.7 Optional chaining
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': javascript.rules['no-unused-vars'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': javascript.rules['no-use-before-define'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': javascript.rules['no-useless-constructor'],
    'quotes': 'off',
    '@typescript-eslint/quotes': javascript.rules.quotes,
    'require-await': 'off',
    '@typescript-eslint/require-await': javascript.rules['require-await'],
    'no-return-await': 'off',
    '@typescript-eslint/return-await': javascript.rules['no-return-await'],
    'semi': 'off',
    '@typescript-eslint/semi': javascript.rules.semi,
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': javascript.rules['space-before-function-paren'],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': javascript.rules['space-infix-ops'],
  },
};
