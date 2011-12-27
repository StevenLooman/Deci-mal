var decimal = require('..');

module.exports = {
    'test Decimal#eq1': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.eq(e), true);
    },
    'test Decimal#eq2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.eq(e), true);
    },
    'test Decimal#eq3': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 20);

        assert.equal(d.eq(e), false);
    },
    'test Decimal#eq4': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 20);

        assert.equal(d.eq(e), false);
    }
};
