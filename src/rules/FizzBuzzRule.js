"use strict";
exports.__esModule = true;
var FizzBuzzRule = /** @class */ (function () {
    function FizzBuzzRule() {
    }
    FizzBuzzRule.prototype.divisible = function (number) {
        return number % 3 === 0 && number % 5 === 0;
    };
    FizzBuzzRule.prototype.getRuleText = function () {
        return "FizzBuzz";
    };
    return FizzBuzzRule;
}());
exports["default"] = FizzBuzzRule;
