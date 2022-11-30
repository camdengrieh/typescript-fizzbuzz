"use strict";
exports.__esModule = true;
var BuzzRule = /** @class */ (function () {
    function BuzzRule() {
    }
    BuzzRule.prototype.divisible = function (number) {
        return number % 5 === 0;
    };
    BuzzRule.prototype.getRuleText = function () {
        return "Buzz";
    };
    return BuzzRule;
}());
exports["default"] = BuzzRule;
