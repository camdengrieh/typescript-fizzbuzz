"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var RulesStorage_1 = require("../storage/RulesStorage");
var typescript_ioc_1 = require("typescript-ioc");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.start = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getRuleText(i));
        }
        return output;
    };
    Game.prototype.getRuleText = function (number) {
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.divisible(number)) {
                return rule.getRuleText();
            }
        }
        return String(number);
    };
    __decorate([
        typescript_ioc_1.Inject
    ], Game.prototype, "rules");
    Game = __decorate([
        typescript_ioc_1.Singleton
    ], Game);
    return Game;
}(RulesStorage_1["default"]));
exports["default"] = Game;
