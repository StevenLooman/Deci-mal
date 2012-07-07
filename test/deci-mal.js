var decimal = require('..');
var assert = require('assert');

describe('Decimal', function() {
    describe('#add()', function() {
        it('should be able to correctly add two numbers with the same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);
            var f = d.add(e);

            assert.equal(f.precision, 2);
            assert.equal(f.value, 3000);
        });

        it('should be able to correctly add two numbers with a different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 20);
            var f = d.add(e);

            assert.equal(f.precision, 4); // highest precision is taken
            assert.equal(f.value, 300000);
        });
    });

    describe('#sub()', function() {
        it('should be able to correctly subtract two numbers with the same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);
            var f = d.sub(e);

            assert.equal(f.precision, 2);
            assert.equal(f.value, -1000);
        });

        it('should be able to correctly subtract two numbers with a different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 20);
            var f = d.sub(e);

            assert.equal(f.precision, 4);
            assert.equal(f.value, -100000);
        });
    });

    describe('#mult()', function() {
        it('should be able to correctly multiply two numbers with the same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);
            var f = d.mult(e);

            assert.equal(f.precision, 2);
            assert.equal(f.value, 20000);
        });

        it('should be able to correctly multiply two numbers with a different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 20);
            var f = d.mult(e);

            assert.equal(f.precision, 4);
            assert.equal(f.value, 2000000);
        });
    });

    describe('#div()', function() {
        it('should be able to correctly divide two numbers with the same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);
            var f = d.div(e);

            assert.equal(f.precision, 2);
            assert.equal(f.value, 50);
        });

        it('should be able to correctly divide two numbers with different precision', function() {
            var d = decimal.fromNumber(2, 20);
            var e = decimal.fromNumber(4, 40.1);
            var f = d.div(e);

            assert.equal(f.precision, 4);
            assert.equal(f.value, 4988); // 4988 instead of 4987 due to rounding
        });
    });

    describe('#eq()', function() {
        it('should return true if two numbers are exactly equal', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.eq(e), true);
        });

        it('should return true if two numbers have the same value, but different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.eq(e), true);
        });

        it('should return false if two numbers have the same precision, but different values', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);

            assert.equal(d.eq(e), false);
        });

        it('should return false if two numbers have different precision and different values', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 20);

            assert.equal(d.eq(e), false);
        });
    });

    describe('#ge()', function() {
        it('should return true if a is greater than b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 5);

            assert.equal(d.ge(e), true);
        });

        it('should return true if a is greater than b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 5);

            assert.equal(d.ge(e), true);
        });

        it('should return false if a is equal to b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.ge(e), false);
        });

        it('should return false if a is equal to b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.ge(e), false);
        });
    });

    describe('#geq()', function() {
        it('should return true if a is greater than b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 5);

            assert.equal(d.geq(e), true);
        });

        it('should return true if a is greater than b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 5);

            assert.equal(d.geq(e), true);
        });

        it('should return true if a is equal to b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.geq(e), true);
        });

        it('should return true if a is equal to b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.geq(e), true);
        });

        it('should return false if a is NOT greater than b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 20);

            assert.equal(d.geq(e), false);
        });

        it('should return false if a is NOT greater than b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 20);

            assert.equal(d.geq(e), false);
        });
    });

    describe('#le()', function() {
        it('should return true if a is lesser than b, same precision', function() {
            var d = decimal.fromNumber(2, 5);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.le(e), true);
        });

        it('should return true if a is lesser than b, different precision', function() {
            var d = decimal.fromNumber(2, 5);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.le(e), true);
        });

        it('should return false if a is equal to b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.le(e), false);
        });

        it('should return false if a is equal to b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.le(e), false);
        });
    });

    describe('#leq()', function() {
        it('should return true if a is lesser than b, same precision', function() {
            var d = decimal.fromNumber(2, 5);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.leq(e), true);
        });

        it('should return true if a is lesser than b, different precision', function() {
            var d = decimal.fromNumber(2, 5);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.leq(e), true);
        });

        it('should return true if a is equal to b, same precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.leq(e), true);
        });

        it('should return true if a is equal to b, different precision', function() {
            var d = decimal.fromNumber(2, 10);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.leq(e), true);
        });

        it('should return false if a is NOT lesser than b, same precision', function() {
            var d = decimal.fromNumber(2, 20);
            var e = decimal.fromNumber(2, 10);

            assert.equal(d.leq(e), false);
        });

        it('should return false if a is NOT lesser than b, different precision', function() {
            var d = decimal.fromNumber(2, 20);
            var e = decimal.fromNumber(4, 10);

            assert.equal(d.leq(e), false);
        });
    });

    describe('#toString()', function() {
        it('should be able to give a string representation of a positive value', function() {
            var d = decimal.fromNumber(2, 10);

            assert.equal(d.toString(), '10.00');
        });

        it('should be able to give a string representation of a negative value', function() {
            var d = decimal.fromNumber(2, -10);

            assert.equal(d.toString(), '-10.00');
        });

        it('should be able to give a string representation of a small positive value', function() {
            var d = decimal.fromNumber(2, 0.5);

            assert.equal(d.toString(), '0.50');
        });

        it('should be able to give a string representation of a smaller positive value', function() {
            var d = decimal.fromNumber(2, 0.05);

            assert.equal(d.toString(), '0.05');
        });
    });

    describe('#fromString()', function() {
        it('should be able to correctly parse a positive value', function() {
            var d = decimal.fromString(2, '10.00');

            assert.equal(d.precision, 2);
            assert.equal(d.value, 1000);
        });
    });
});