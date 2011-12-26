/**
 * Module dependencies.
 *
 */

var decimal = require('./decimal');

/**
 * Export Decimal
 *
 * @api public
 */
exports.decimal = decimal.Decimal;

/**
 * From Number
 *
 * @api public
 */
exports.fromNumber = decimal.fromNumber;

/**
 * From String
 *
 * @api public
 */
exports.fromString = decimal.fromString;
