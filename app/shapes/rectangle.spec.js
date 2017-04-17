'use strict'
const Rectangle = require('./rectangle');
const Logger = require('../logger');

describe('Rectangle', () => {

    describe('Constructor', () => {

        it('should be created with one properties: logger', () => {
            let sut = new Rectangle(4, 20);
            expect(sut).to.have.property('logger');
        });

        it('to be an object', () => {
            expect(new Rectangle(4, 20)).to.be.an('object');
        });

        it('throw error when no arguments', () => {
            (() => {
                new Rectangle();
            }).should.throw(Error);
        });

        it('throw error when one numerical arguments', () => {
            (() => {
                new Rectangle(4);
            }).should.throw(Error);
        });

        it('throw error when no numerical arguments', () => {
            (() => {
                new Rectangle('foo', 'bar');
            }).should.throw(Error);
        });

        it('NOT throw error when 2 numerical arguments', () => {
            (() => {
                new Rectangle(4, 6);
            }).should.not.throw(Error);
        });
    });

    describe('Width', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', () => {
            rectangle.width.should.equal(10);
        });

        it('can be changed', () => {
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });

        it('only accepts numerical values', () => {
            (() => {
                rectangle.width = 'foo';
            }).should.throw(Error);
        });
    });

    describe('Height', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the height', () => {
            rectangle.height.should.equal(20);
        });

        it('can be changed', () => {
            rectangle.height = 30;
            rectangle.height.should.equal(30);
        });

        it('only accepts numerical values', () => {
            (() => {
                rectangle.height = 'foo';
            }).should.throw(Error);
        });
    });

    describe('Area', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the area', () => {
            rectangle.area.should.equal(200);
        });

        it('can not be changed', () => {
            (() => {
                rectangle.area = 1000;
            }).should.throw(Error);
        });
    });

    describe('Circumference', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the circumference', () => {
            rectangle.circumference.should.equal(60);
        });

        it('can not be changed', () => {
            (() => {
                rectangle.circumference = 1000;
            }).should.throw(Error);
        });
    });
})
