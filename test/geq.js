var decimal = require('..');

module.exports = {
    'test Decimal#geq1': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 5);

        assert.equal(d.geq(e), true);
    },
    'test Decimal#geq2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 5);

        assert.equal(d.geq(e), true);
    },
    'test Decimal#geq3': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.geq(e), true);
    },
    'test Decimal#geq4': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.geq(e), true);
    },
    'test Decimal#geq5': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 20);

        assert.equal(d.geq(e), false);
    },
    'test Decimal#geq6': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 20);

        assert.equal(d.geq(e), false);
    },
};
