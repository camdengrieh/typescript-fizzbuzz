"use strict";
exports.__esModule = true;
var BuzzRule_1 = require("./rules/BuzzRule");
var FizzBuzzRule_1 = require("./rules/FizzBuzzRule");
var FizzRule_1 = require("./rules/FizzRule");
var GameController_1 = require("./gameController/GameController");
var fizzRule = new FizzRule_1["default"];
var buzzRule = new BuzzRule_1["default"];
var fizzBuzzRule = new FizzBuzzRule_1["default"];
// Stricter rules must run first otherwise the for loop will pass iterate to the next number
var rules = [fizzBuzzRule, fizzRule, buzzRule];
var game = new GameController_1["default"](rules);
var result = game.start(100);
console.log(result.join(", "));
