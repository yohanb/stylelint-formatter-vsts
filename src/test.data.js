// A stylelint result object
const results = [{

    // The filepath or PostCSS identifier like <input css 1>
    source: "path/to/file.css",

    // This is `true` if at least one rule with an "error"-level severity triggered a warning
    errored: true,

    // Array of rule violation warning objects, each like the following ...
    warnings: [
        {
            line: 3,
            column: 12,
            rule: "block-no-empty",
            severity: "error",
            text: "You should not have an empty block (block-no-empty)"
        },
        {
            line: 999,
            column: 1234,
            rule: "number-leading-zero",
            severity: "warning",
            text: "There must always be a leading zero (number-leading-zero)"
        }
    ],

    // Array of deprecation warning objects, each like the following ...
    deprecations: [
        {
            text: "Feature X has been deprecated and will be removed in the next major version.",
            reference: "http://stylelint.io/docs/feature-x.md"
        }
    ],

    // Array of invalid option warning objects, each like the following ...
    invalidOptionWarnings: [
        {
            text: "Invalid option X for rule Y"
        }
    ],

    // This is `true` if the file's path matches a provided ignore pattern
    ignored: false
}];

module.exports = results;