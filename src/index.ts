import BuzzRule from "./rules/BuzzRule";
import FizzBuzzRule from "./rules/FizzBuzzRule";
import FizzRule from "./rules/FizzRule";
import Game from "./gameController/GameController";
import RuleInterface from "./interfaces/RuleInterfaces";

  let rules: RuleInterface[] = [new BuzzRule,new FizzRule,new FizzBuzzRule]
  const game = new Game(rules);

  const result = game.start(100);
  
  console.log(result.join(", "));