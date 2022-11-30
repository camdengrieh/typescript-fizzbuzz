import BuzzRule from "./rules/BuzzRule";
import FizzBuzzRule from "./rules/FizzBuzzRule";
import FizzRule from "./rules/FizzRule";
import Game from "./gameController/GameController";
import RuleStorage from "./storage/RulesStorage"

  let ruleStorage: RuleStorage = new RuleStorage([new FizzBuzzRule,new FizzRule, new BuzzRule])
  const game = new Game(ruleStorage);

  const result = game.start(100);
  
  console.log(result.join(", "));