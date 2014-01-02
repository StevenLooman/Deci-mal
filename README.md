Deci-mal
========

Simple Decimal type for Javascript.

Simple Decimal type which allows for:

* conversion from numbers;
* conversion from strings;
* specification of precision;
* changing of precision;
* addition of Decimals;
* subtraction of Decimals;
* multiplication of Decimals;
* division of Decimals.

When doing add, sub, mult, div-operators with two Decimals, the result will have the precision of the source Decimal with the highest precision.

Deci-mal uses an integer for internal storage.

Deci-mal is released under the Simplified BSD License.

Example usage
=============
```js
var decimal = require('./');
var Decimal = decimal.decimal;

// conversion from numbers
var a = decimal.fromNumber(20, 2); // 20.00
var b = decimal.fromNumber(40.1, 4); // 40.1000

// conversion from strings
var c = decimal.fromString('60.60001', 2); // 60.60

// specification of precision
var d = new Decimal(1); // 0.0

// changing of precision
b.newPrecision(2).toString(); // 40.10

// addition
a.add(b).toString(); // 60.1000

// subtraction
a.sub(b).toString(); // -20.1000

// multiplication
a.mult(b).toString(); // 802.0000

// division
a.div(b).toString(); // 0.4988
```

Unit testing
============
Unit tests are built using Mocha.
