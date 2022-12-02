import RuleStorage from "../storage/RulesStorage";
import { Inject, Singleton } from "typescript-ioc";
import RuleInterface from "../interfaces/RuleInterfaces";

@Singleton
export default class Game extends RuleStorage{
    @Inject rules: RuleInterface[]
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