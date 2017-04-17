'use strict'
const Logger = require('./logger');

class Calculator {

    constructor() {
        this.logger = new Logger();
    }

    multiple(a, b) {
        this.validateNumerical(a, b);
        return (a * b);
    }

    divide(numerator, denominator) {
        this.validateNumerical(numerator, denominator);
        if (denominator === 0) {
            this.logger.log(`Division by Zero: ${numerator}/${denominator}`);
            throw new Error('Denominator cannot be zero.');
        }
        return (numerator / denominator);
    }

    validateNumerical(...args) {
        for (let arg of args) {
            if (typeof arg !== 'number') {
                throw new Error('must be a number.');
            }
        }
    }
}

module.exports = Calculator;
