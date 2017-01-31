const _ = require("lodash");

const formatter = (results) => 
    _.flatMap(results, result => 
        _.map(result.warnings, warning => 
            "##vso[task.logissue " +
            `type=${warning.severity};` +
            `sourcepath=${result.source};` +
            `linenumber=${warning.line};` +
            `columnnumber=${warning.column};` +
            `code=${warning.rule};]` +
            `${warning.text}`)).join("\n");

module.exports = formatter;