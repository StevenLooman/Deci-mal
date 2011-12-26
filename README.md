Decimal
=======

Simple Decimal type for Javascript.

Simple Decimal type which allows for:
  - conversion from numbers;
  - conversion from strings;
  - specification of precision;
  - changing of precision;
  - addition of Decimals;
  - subtraction of Decimals;
  - multiplication of Decimals;
  - division of Decimals.

When doing add, sub, mult, div-operators with two Decimals, the result will have the precision of the source Decimal with the highest precision.

JsDecimal uses an integer for internal storage.

Example usage
=============
```js
    var decimal = require('decimal');

    // conversion from numbers
    var a = decimal.fromNumber(2, 20); // 20.00
    var b = decimal.fromNumber(4, 40.1); // 40.1000

    // conversion from strings
    var c = Decimal.fromString(2, '60.60001'); // 60.00

    // specification of precision
    var d = new Decimal(1); // 0.0

    // changing of precision
    b.newPrecision(2).toString(); // 40.10

    // addition
    a.add(b).toString(); // 60.1000

    // subtraction
    a.sub(b).toString(); // -20.1000

    // multiplication
    a.mul(b).toString(); // 802.0000

    // division
    a.div(b).toString(); // 0.4988
```

Unit testing
============
Unit tests are built using Expresso.
