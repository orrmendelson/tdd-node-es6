'use strict'

const HelloWorld = require('./app/helloworld');

let c = new HelloWorld(process.argv.slice(2));
c.run();
