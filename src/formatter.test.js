const assert = require("assert");
const formatter = require("./formatter.js");
const results = require("./test.data.js");

describe("Formatter", () => {
    describe("#formatter()", () => {
        it("respects vsts format", () => {
            const output = formatter(results);
            const formatRegex = /##vso\[task\.logissue type=(?:error|warning);sourcepath=.+?;linenumber=\d+?;columnnumber=\d+?;code=.+?;\].*/g;
            const match = output.match(formatRegex);
            assert.ok(match.length > 0);
        });
    });
});