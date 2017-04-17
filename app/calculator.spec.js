'use strict'
const Calculator = require('./calculator');
const Logger = require('./logger');

describe('Calculator', () => {

    describe('Constructor', () => {
        it('should be created with one properties: logger', () => {
            let sut = new Calculator();
            expect(sut).to.have.property('logger');
        });
    });

    describe('Multiple', () => {
        it('should return multiple calc for 2 params', () => {
            let sut = new Calculator();
            expect(sut.multiple(2, 3)).to.equal(6);
        });
        it('should throw error when one of param not number', () => {
            (() => {
                let sut = new Calculator();
                sut.multiple("2", 0);
            }).should.throw(Error);
        });
    });

    describe('Division', () => {

        it('should return correct result for 2 integers', () => {
            let sut = new Calculator();
            expect(sut.divide(6, 3)).to.equal(2);
        });

        it('call logger when dividing by zero', () => {
            (() => {
                  let logger = new Logger();
                  let stub = sinon.stub(logger, 'log').returns();
                  let sut = new Calculator();
                  sut.logger = logger;
                  sut.divide(2, 0);
                  //TODO logger.log.should.have.been.called.once;
            }).should.throw(Error);
        });

        it('should throw error when dividing by zero', () => {
            (() => {
                let sut = new Calculator();
                sut.divide(2, 0);
            }).should.throw(Error);
        });
    });
})
