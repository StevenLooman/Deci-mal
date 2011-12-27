var decimal = require('..');

module.exports = {
    'test Decimal#leq1': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 5);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.leq(e), true);
    },
    'test Decimal#leq2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 5);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.leq(e), true);
    },
    'test Decimal#leq3': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.leq(e), true);
    },
    'test Decimal#leq4': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.leq(e), true);
    },
    'test Decimal#leq5': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 20);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.leq(e), false);
    },
    'test Decimal#leq6': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 20);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.leq(e), false);
    },
};
