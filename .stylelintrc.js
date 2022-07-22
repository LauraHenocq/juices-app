module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue',
        'stylelint-config-recess-order',
        'stylelint-config-prettier'
    ],
    rules: {
        'selector-class-pattern': null,
        'indentation': [2, { 'baseIndentLevel': 0 }],
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["function", "if", "each", "include", "mixin"]
        }]
    },
}
