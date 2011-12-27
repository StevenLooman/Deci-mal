var decimal = require('..');

module.exports = {
    'test Decimal#ge1': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 5);

        assert.equal(d.ge(e), true);
    },
    'test Decimal#ge2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 5);

        assert.equal(d.ge(e), true);
    },
    'test Decimal#ge3': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.ge(e), false);
    },
    'test Decimal#ge4': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.ge(e), false);
    }
};
