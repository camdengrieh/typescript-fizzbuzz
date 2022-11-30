import RuleInterface from "./interfaces/RuleInterfaces";
import BuzzRule from "./rules/BuzzRule";
import FizzBuzzRule from "./rules/FizzBuzzRule";
import FizzRule from "./rules/FizzRule";
import { Inject } from "typescript-ioc";

class Game {
    @Inject
    private ruleStorage: RuleStorage;

    constructor (@Inject _ruleStorage: RuleStorage) {
      this.ruleStorage = _ruleStorage;
    }
  
  
    start(number: number) {
      const output: string[] = [];
  
      for (let i = 1; i <= number; i++) {
        output.push(this.getRuleText(i));
      }
  
      return output;
    }
  
    getRuleText(number: number): string {
      for (const rule of ruleStorage.rules) {
        if (rule.divisible(number)) {
          return rule.getRuleText();
        }
      }
      return String(number);
    }
  }

  class RuleStorage {
    @Inject
    rules: RuleInterface[] = [];

    constructor(@Inject _rules: RuleInterface[]){
      for(let i = 0; i < _rules.length; i++){
      this.rules.push(_rules[i]);
      }
    }

  }

  let ruleStorage: RuleStorage = new RuleStorage([new FizzBuzzRule,new FizzRule, new BuzzRule])
  const game = new Game(ruleStorage);

  const result = game.start(100);
  
  console.log(result.join(", "));