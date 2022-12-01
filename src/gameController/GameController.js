"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var typescript_ioc_1 = require("typescript-ioc");
var Game = /** @class */ (function () {
    function Game(_ruleStorage) {
        this.ruleStorage = _ruleStorage;
    }
    Game.prototype.start = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getRuleText(i));
        }
        return output;
    };
    Game.prototype.getRuleText = function (number) {
        for (var _i = 0, _a = this.ruleStorage.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.divisible(number)) {
                return rule.getRuleText();
            }
        }
        return String(number);
    };
    __decorate([
        typescript_ioc_1.Inject
    ], Game.prototype, "ruleStorage");
    Game = __decorate([
        __param(0, typescript_ioc_1.Inject)
    ], Game);
    return Game;
}());
exports["default"] = Game;
