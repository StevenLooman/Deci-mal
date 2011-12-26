var decimal = require('..');

module.exports = {
    'test Decimal#add': function(beforeExit, assert) {
        var d = decimal.fromNumber(2, 10);
        var e = decimal.fromNumber(2, 20);
        var f = d.add(e);

        assert.equal(f.precision, 2);
        assert.equal(f.value, 3000);
    }
};
