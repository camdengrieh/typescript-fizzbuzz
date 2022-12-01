"use strict";
exports.__esModule = true;
var ts_mockito_1 = require("ts-mockito");
var GameController_1 = require("../../../src/gameController/GameController");
var BuzzRule_1 = require("../../../src/rules/BuzzRule");
var FizzRule_1 = require("../../../src/rules/FizzRule");
var FizzBuzzRule_1 = require("../../../src/rules/FizzBuzzRule");
var RulesStorage_1 = require("../../../src/storage/RulesStorage");
describe('Testing the functionality of the game', function () {
    describe('Testing Game Controller - When a number is passed into start()...', function () {
        var mockedFizz = (0, ts_mockito_1.mock)(FizzRule_1["default"]);
        var mockedBuzz = (0, ts_mockito_1.mock)(BuzzRule_1["default"]);
        var mockedFizzBuzz = (0, ts_mockito_1.mock)(FizzBuzzRule_1["default"]);
        var mockedStorage = (0, ts_mockito_1.mock)(RulesStorage_1["default"]);
        var mockedGame = new GameController_1["default"]((0, ts_mockito_1.instance)(mockedStorage));
        beforeEach(function () {
            (0, ts_mockito_1.resetCalls)(mockedGame);
        });
        it("check getRuleText is called by the amount of numbers in the sequence - 1 to number(argument)", function () {
            var mGame = (0, ts_mockito_1.instance)(mockedGame);
            //Start the game and pass in 10 numbers - 1 to 10
            mGame.start(10);
            //
            (0, ts_mockito_1.verify)(mockedGame.getRuleText((0, ts_mockito_1.anyNumber)())).times(10);
        });
        it("check number is replaced by the rule text if its divisbile by a rule", function () {
        });
    });
});
