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
var RuleStorage = /** @class */ (function () {
    function RuleStorage(_rules) {
        this.rules = [];
        for (var i = 0; i < _rules.length; i++) {
            this.rules.push(_rules[i]);
        }
    }
    __decorate([
        typescript_ioc_1.Inject
    ], RuleStorage.prototype, "rules");
    RuleStorage = __decorate([
        __param(0, typescript_ioc_1.Inject)
    ], RuleStorage);
    return RuleStorage;
}());
exports["default"] = RuleStorage;
