"use strict";
exports.__esModule = true;
var FizzRule = /** @class */ (function () {
    function FizzRule() {
    }
    FizzRule.prototype.divisible = function (number) {
        return number % 3 === 0;
    };
    FizzRule.prototype.getRuleText = function () {
        return "Fizz";
    };
    return FizzRule;
}());
exports["default"] = FizzRule;
