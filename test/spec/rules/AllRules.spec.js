"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var ts_mockito_1 = require("ts-mockito");
var FizzRule_1 = require("../../../src/rules/FizzRule");
var BuzzRule_1 = require("../../../src/rules/BuzzRule");
var FizzBuzzRule_1 = require("../../../src/rules/FizzBuzzRule");
//import { expect } from '../../utils/expects'
describe('Testing the rules of the game', function () {
    describe('Testing Fizz Rules - When a number is passed into divisible()...', function () {
        var mockedFizz = (0, ts_mockito_1.mock)(FizzRule_1["default"]);
        beforeEach(function () {
            (0, ts_mockito_1.resetCalls)(mockedFizz);
        });
        it("check number is divisible by 3 - return if True", function () {
            var fizz = new FizzRule_1["default"];
            var mFizz = (0, ts_mockito_1.instance)(mockedFizz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0)
                if (fizz.divisible(i)) {
                    mFizz.divisible(i);
                }
                ;
            }
            //then true is returned 5 times if divisible by 3
            (0, ts_mockito_1.verify)(mockedFizz.divisible((0, ts_mockito_1.anyNumber)())).times(5);
            //verify numbers that are divisible by 3, return true
            (0, chai_1.expect)(fizz.divisible(3)).to.be.equal(true);
            (0, chai_1.expect)(fizz.divisible(15)).to.be.equal(true);
        });
        it("check number is NOT divisible by 3 - return if False", function () {
            var fizz = new FizzRule_1["default"];
            var mFizz = (0, ts_mockito_1.instance)(mockedFizz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0)
                if (!fizz.divisible(i)) {
                    mFizz.divisible(i);
                }
                ;
            }
            // false is returned 10 times if NOT divisible by 3
            (0, ts_mockito_1.verify)(mockedFizz.divisible((0, ts_mockito_1.anyNumber)())).times(10);
            //verify numbers that are NOT divisible by 3, return false
            (0, chai_1.expect)(fizz.divisible(5)).to.be.equal(false);
            (0, chai_1.expect)(fizz.divisible(11)).to.be.equal(false);
        });
    });
    describe('Testing Buzz Rules - When a number is passed into divisible()...', function () {
        var mockedBuzz = (0, ts_mockito_1.mock)(BuzzRule_1["default"]);
        beforeEach(function () {
            (0, ts_mockito_1.resetCalls)(mockedBuzz);
        });
        it("check number is divisible by 5 - return if True", function () {
            var buzz = new BuzzRule_1["default"];
            var mBuzz = (0, ts_mockito_1.instance)(mockedBuzz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 5 === 0)
                if (buzz.divisible(i)) {
                    mBuzz.divisible(i);
                }
                ;
            }
            //then true is returned 5 times if divisible by 5
            (0, ts_mockito_1.verify)(mockedBuzz.divisible((0, ts_mockito_1.anyNumber)())).times(3);
            //verify numbers that are divisible by 5, return true
            (0, chai_1.expect)(buzz.divisible(5)).to.be.equal(true);
            (0, chai_1.expect)(buzz.divisible(10)).to.be.equal(true);
        });
        it("check number is NOT divisible by 5 - return if False", function () {
            var buzz = new BuzzRule_1["default"];
            var mBuzz = (0, ts_mockito_1.instance)(mockedBuzz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 5 === 0)
                if (!buzz.divisible(i)) {
                    mBuzz.divisible(i);
                }
                ;
            }
            // false is returned 10 times if NOT divisible by 5
            (0, ts_mockito_1.verify)(mockedBuzz.divisible((0, ts_mockito_1.anyNumber)())).times(12);
            //verify numbers that are NOT divisible by 5, return false
            (0, chai_1.expect)(buzz.divisible(3)).to.be.equal(false);
            (0, chai_1.expect)(buzz.divisible(12)).to.be.equal(false);
        });
    });
    describe('Testing FizzBuzz Rules - When a number is passed into divisible()...', function () {
        var mockedFizzBuzz = (0, ts_mockito_1.mock)(FizzBuzzRule_1["default"]);
        beforeEach(function () {
            (0, ts_mockito_1.resetCalls)(mockedFizzBuzz);
        });
        it("check number is divisible by 3 and 5 - return if True", function () {
            var fizzBuzz = new FizzBuzzRule_1["default"];
            var mFizzBuzz = (0, ts_mockito_1.instance)(mockedFizzBuzz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0 && i % 5 === 0)
                if (fizzBuzz.divisible(i)) {
                    mFizzBuzz.divisible(i);
                }
                ;
            }
            //then true is returned 5 times if divisible by 3 and 5
            (0, ts_mockito_1.verify)(mockedFizzBuzz.divisible((0, ts_mockito_1.anyNumber)())).once();
            //verify numbers that are divisible by 3 and 5, return true
            (0, chai_1.expect)(fizzBuzz.divisible(15)).to.be.equal(true);
        });
        it("check number is NOT divisible by 3 and 5 - return if False", function () {
            var fizzBuzz = new FizzBuzzRule_1["default"];
            var mFizzBuzz = (0, ts_mockito_1.instance)(mockedFizzBuzz);
            //when there is a sequence of 15 numbers from 1 to 15
            for (var i = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0 && i % 5 === 0)
                if (!fizzBuzz.divisible(i)) {
                    mFizzBuzz.divisible(i);
                }
                ;
            }
            // false is returned 10 times if NOT divisible by 3 and 5
            (0, ts_mockito_1.verify)(mockedFizzBuzz.divisible((0, ts_mockito_1.anyNumber)())).times(14);
            //verify numbers that are NOT divisible by 3 and 5, return false
            (0, chai_1.expect)(fizzBuzz.divisible(3)).to.be.equal(false);
            (0, chai_1.expect)(fizzBuzz.divisible(5)).to.be.equal(false);
            (0, chai_1.expect)(fizzBuzz.divisible(10)).to.be.equal(false);
        });
    });
});
