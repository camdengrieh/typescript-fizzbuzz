"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var ts_mockito_1 = require("ts-mockito");
var GameController_1 = require("../../../src/gameController/GameController");
var BuzzRule_1 = require("../../../src/rules/BuzzRule");
var FizzRule_1 = require("../../../src/rules/FizzRule");
var FizzBuzzRule_1 = require("../../../src/rules/FizzBuzzRule");
// TODO 
describe('Testing Game Controller - When a number is passed into start()...', function () {
    var mockedFizz = (0, ts_mockito_1.mock)(FizzRule_1["default"]);
    var mockedBuzz = (0, ts_mockito_1.mock)(BuzzRule_1["default"]);
    var mockedFizzBuzz = (0, ts_mockito_1.mock)(FizzBuzzRule_1["default"]);
    var rules = [mockedFizzBuzz, mockedBuzz, mockedFizz];
    var ruleStorage;
    beforeEach(function () {
        ruleStorage = (0, ts_mockito_1.mock)(rules);
    });
    it("check getRuleText is called by the amount of numbers in the sequence - 1 to number(argument)", function () {
        var mockedGame = new GameController_1["default"](rules);
        var mGame = (0, ts_mockito_1.instance)(mockedGame);
        //Start the game and pass in 10 numbers - 1 to 10
        mockedGame.start(10);
        //
        (0, ts_mockito_1.verify)(mGame.getRuleText((0, ts_mockito_1.anyNumber)())).times(10);
    });
    it('should return "Fizz" if the number is divisible by 3', function () {
        var game = new GameController_1["default"]([mockedFizz]);
        (0, ts_mockito_1.when)(game.getRuleText(3)).thenReturn("Fizz");
        (0, chai_1.expect)(game.getRuleText(3)).to("Fizz");
    });
    it('should return "Buzz" if the number is divisible by 5', function () {
        var game = new GameController_1["default"]([mockedBuzz]);
        (0, ts_mockito_1.when)(game.getRuleText(5)).thenReturn("Buzz");
        (0, chai_1.expect)(game.getRuleText(5)).to("Buzz");
    });
    it('should return "FizzBuzz" if the number is divisible by 3 and 5', function () {
        var game = new GameController_1["default"]([mockedFizzBuzz]);
        (0, ts_mockito_1.when)(game.getRuleText(15)).thenReturn("FizzBuzz");
        (0, chai_1.expect)(game.getRuleText(15)).to("FizzBuzz");
    });
});
