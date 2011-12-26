var decimal = require('..');

module.exports = {
    'test Decimal#mult': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 20);
        var f = d.mult(e);

        assert.equal(f.precision, 2);
        assert.equal(f.value, 20000);
    }
};
