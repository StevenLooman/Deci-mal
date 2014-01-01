/**
 * Constructor
 *
 * @param {Number} Precision of the Decimal
 * @param {Number} Internal value of the Decimal (original_value * 10^precision)
 * @api private
 */
function Decimal(precision, value) {
    if (precision < 0) {
        throw new RangeError();
    }

    this.precision = precision;
    if (value instanceof Decimal) { // copy constructor
        var newDecimal = value.newPrecision(precision);
        this.value = newDecimal.value;
    } else if (value) { // init constructor
        this.value = value;
    } else { // default constructor
        this.value = 0;
    }
}

/**
 * Create a decimal from a number, with the given the precision
 *
 * @param {Number} Precision of the Decimal
 * @param {Number} Value of the Decimal
 * @api public
 */
Decimal.fromNumber = function(number, precision) {
    var value = number * Math.pow(10, precision);
    value = Math.round(value);
    return new Decimal(precision, value);
};

/**
 * Create a decimal from a string,
 *   with the given precision or automatically determining the precision from the string
 *
 * @param {String} Value of the Decimal
 * @param {Number} Precision of the Decimal, optional
 * @api public
 */
Decimal.fromString = function(str, precision) {
    var value;
    if (precision !== undefined) {
        value = Number(str) * Math.pow(10, precision);
        value = Math.round(value);
        return new Decimal(precision, value);
    }

    // only a String, try to parse it
    var first = str.split('.')[0];
    var second = str.split('.')[1];
    precision = second.length;
    value = Number(first) * Math.pow(10, precision) + Number(second);
    return new Decimal(precision, value);
};

/**
 * Convert to String
 *
 * @api public
 */
Decimal.prototype.toString = function() {
    function lpad(str, padValue, length) {
        var r = str;
        while (r.length < length) {
            r = padValue + r;
        }
        return r;
    }

    var str = lpad(this.value.toString(), '0', this.precision);
    var len = str.length;
    var r = str.slice(0, len - this.precision) + '.' + str.slice(len - this.precision);
    if (r[0] === '.') {
        return '0' + r;
    }

    return r;
};

/**
 * Cast to a new precision
 *
 * @param {Number} New precision to sue
 * @api public
 */
Decimal.prototype.newPrecision = function(newPrecision) {
    var result = new Decimal(newPrecision);
    var value = this.value;
    var precisionChange = Math.abs(this.precision - newPrecision);

    // scale up
    if (this.precision < newPrecision) {
        value *= Math.pow(10, precisionChange);
    }

    // scale down
    if (this.precision > newPrecision) {
        value /= Math.pow(10, precisionChange);
    }

    // FIX: prevent fractions due to too little precision
    if (-1 < value && value < 1) {
        value = 0;
    }

    result.value = value;
    return result;
};

/**
 * Add another Decimal to this
 *
 * @param {Decimal} Other decimal to add
 * @api public
 */
Decimal.prototype.add = function(other) {
    var maxPrecision = Math.max(this.precision, other.precision);

    var a = this.newPrecision(maxPrecision);
    var b = other.newPrecision(maxPrecision);

    var result = new Decimal(maxPrecision);
    result.value = a.value + b.value;

    return result;
};

/**
 * Subtract another Decimal from this
 *
 * @param {Decimal} Other decimal to subtract
 * @api public
 */
Decimal.prototype.sub = function(other) {
    var maxPrecision = Math.max(this.precision, other.precision);

    var a = this.newPrecision(maxPrecision);
    var b = other.newPrecision(maxPrecision);

    var result = new Decimal(maxPrecision);
    result.value = a.value - b.value;

    return result;
};

/**
 * Multiply this with another Decimal
 *
 * @param {Decimal} Other decimal to multiply with
 * @api public
 */
Decimal.prototype.mult = function(other) {
    var maxPrecision = Math.max(this.precision, other.precision);

    var a = this.newPrecision(maxPrecision);
    var b = other.newPrecision(maxPrecision);

    var result = new Decimal(maxPrecision);
    result.value = (a.value * b.value) / Math.pow(10, maxPrecision);

    return result;
};

/**
 * Divide this with another Decimal
 *
 * @param {Decimal} Other decimal to divide with
 * @api public
 */
Decimal.prototype.div = function(other) {
    var maxPrecision = Math.max(this.precision, other.precision);

    var a = this.newPrecision(maxPrecision);
    var b = other.newPrecision(maxPrecision);

    var result = new Decimal(maxPrecision);
    result.value = (a.value / b.value) * Math.pow(10, maxPrecision);
    result.value = Math.round(result.value);

    return result;
};

/**
 * Compare this to other
 * Precision does not have to be the same and is automatically upscaled if needed
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.cmp = function(other) {
    var maxPrecision = Math.max(this.precision, other.precision);

    var a = this.newPrecision(maxPrecision);
    var b = other.newPrecision(maxPrecision);

    if (a.value < b.value) {
        return -1;
    }

    if (a.value > b.value) {
        return 1;
    }

    return 0;
};

/**
 * Test if this is equal to other
 * Precision does not have to be the same
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.eq = function(other) {
    return this.cmp(other) === 0;
};

/**
 * Test if this is less than other
 * Precision does not have to be the same
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.lt = function(other) {
    return this.cmp(other) < 0;
};

/**
 * Test if this is less than or equal to other
 * Precision does not have to be the same
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.le = function(other) {
    return this.cmp(other) <= 0;
};

/**
 * Test if this is greater than other
 * Precision does not have to be the same
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.gt = function(other) {
    return this.cmp(other) > 0;
};

/**
 * Test if this is greater than or equal to other
 * Precision does not have to be the same
 *
 * @param {Decimal} Other decimal to test
 * @api public
 */
Decimal.prototype.ge = function(other) {
    return this.cmp(other) >= 0;
};


// module exports
exports.Decimal = Decimal;
exports.fromNumber = Decimal.fromNumber;
exports.fromString = Decimal.fromString;
