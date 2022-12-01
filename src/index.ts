import BuzzRule from "./rules/BuzzRule";
import FizzBuzzRule from "./rules/FizzBuzzRule";
import FizzRule from "./rules/FizzRule";
import Game from "./gameController/GameController";
import RuleStorage from "./storage/RulesStorage"
import RuleInterface from "./interfaces/RuleInterfaces";

let rules: RuleInterface[] = [new BuzzRule,new FizzRule,new BuzzRule]
  let ruleStorage: RuleStorage = new RuleStorage(rules)
  const game = new Game(ruleStorage);

  const result = game.start(100);
  
  console.log(result.join(", "));