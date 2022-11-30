import RuleInterface from "../interfaces/RuleInterfaces";

export default class BuzzRule implements RuleInterface {
    divisible(number: number): boolean {
      return number % 5 === 0;
    }
  
    getRuleText(): string {
      return "Buzz";
    }
  }