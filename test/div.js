var decimal = require('..');

module.exports = {
    'test Decimal#div': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 20);
        var f = d.div(e);

        assert.equal(f.precision, 2);
        assert.equal(f.value, 50);
    },

    'test Decimal#div_frac': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 20);
        var e = decimal.fromNumber(4, 40.1);
        var f = d.div(e);

        assert.equal(f.precision, 4);
        assert.equal(f.value, 4988); // 4988 instead of 4987 due to rounding
    }
};
