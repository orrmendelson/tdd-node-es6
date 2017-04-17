'use strict'

const Logger = require('./logger');

class HelloWorld {

    constructor (commandLineArgs) {
        this.commandLineArgs = commandLineArgs;
        this.greeting = 'Hello World';
        this.logger = new Logger();
    }

    run() {
        if (this.commandLineArgs && this.commandLineArgs.length) {
            this.logger.log(this.commandLineArgs.join(' '));
        } else {
            this.logger.log(this.greeting);
        }
    }
}

module.exports = HelloWorld;
