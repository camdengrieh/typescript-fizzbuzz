import BuzzRule from "./rules/BuzzRule";
import FizzBuzzRule from "./rules/FizzBuzzRule";
import FizzRule from "./rules/FizzRule";
import Game from "./gameController/GameController";
import RuleInterface from "./interfaces/RuleInterfaces";

  let fizzRule: RuleInterface = new FizzRule;
  let buzzRule: RuleInterface = new BuzzRule;
  let fizzBuzzRule: RuleInterface = new FizzBuzzRule;
  // Stricter rules must run first otherwise the for loop will pass iterate to the next number
  let rules: RuleInterface[] = [fizzBuzzRule, fizzRule,buzzRule]; 

  const game = new Game(rules)

  const result = game.start(100);
  
  console.log(result.join(", "));