import RuleStorage from "../storage/RulesStorage";
import { Inject } from "typescript-ioc";

export default class Game extends RuleStorage{

    start(number: number) {
      const output: string[] = [];
  
      for (let i = 1; i <= number; i++) {
        output.push(this.getRuleText(i));
      }
  
      return output;
    }
  
    getRuleText(number: number): string {
      for (const rule of this.rules) {
        if (rule.divisible(number)) {
          return rule.getRuleText();
        }
      }
      return String(number);
    }
  }