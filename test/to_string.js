var decimal = require('..');

module.exports = {
    'test Decimal#toString_pos': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);

        assert.equal(d.toString(), '10.00');
    },

    'test Decimal#toString_neg': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, -10);

        assert.equal(d.toString(), '-10.00');
    },

    'test Decimal#toString_pos_small': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 0.5);

        assert.equal(d.toString(), '0.50');
    },
    'test Decimal#toString_pos_small2': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 0.05);

        assert.equal(d.toString(), '0.05');
    }
};
