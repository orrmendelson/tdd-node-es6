'use strict'

const HelloWorld = require('./helloWorld');
const Logger = require('./logger');
const DefaultGreeting = 'Hello World';
const Arg1 = 'Hello';
const Arg2 = 'there!'

describe('HelloWorld', () => {

    describe('Constructor', () => {

        it('should be created with three properties: commandLineArgs, greeting, and logger', () => {
            let sut = new HelloWorld();
            expect(sut).to.have.property('commandLineArgs');
            expect(sut).to.have.property('greeting');
            expect(sut).to.have.property('logger');
        });

        it('should have default greeting', () => {
            let sut = new HelloWorld();
            expect(sut.greeting).to.equal(DefaultGreeting);
        });

        it('should have command line args set when supplied', () => {
            let sut = new HelloWorld([Arg1, Arg2]);
            expect(sut.commandLineArgs).to.have.lengthOf(2);
            expect(sut.commandLineArgs[0]).to.equal(Arg1);
            expect(sut.commandLineArgs[1]).to.equal(Arg2);
        });
    });

    describe('Run', () => {
        it('should log command line args when supplied', () => {
            let logger = new Logger();
            let stub = sinon.stub(logger, 'log').returns();
            let sut = new HelloWorld([Arg1, Arg2]);
            sut.logger = logger;

            sut.run();

            expect(logger.log).to.have.been.calledOnce;
            expect(logger.log).to.have.been.calledWith(`${Arg1} ${Arg2}`);

            stub.restore();
        });

        it('should log default greeting when no command line args are passed', () => {
            let logger = new Logger();
            let stub = sinon.stub(logger, 'log').returns();
            let sut = new HelloWorld();
            sut.logger = logger;

            sut.run();

            expect(logger.log).to.have.been.calledOnce;
            expect(logger.log).to.have.been.calledWith(DefaultGreeting);

            stub.restore();
        });
    });
});
