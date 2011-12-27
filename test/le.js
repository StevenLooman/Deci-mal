var decimal = require('..');

module.exports = {
    'test Decimal#le1': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 5);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.le(e), true);
    },
    'test Decimal#le2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 5);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.le(e), true);
    },
    'test Decimal#le3': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 10);

        assert.equal(d.le(e), false);
    },
    'test Decimal#le4': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(4, 10);

        assert.equal(d.le(e), false);
    }
};
