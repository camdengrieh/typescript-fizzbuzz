import RuleInterface from "../interfaces/RuleInterfaces";

export default class FizzRule implements RuleInterface {
    divisible(number: number): boolean {
      return number % 3 === 0;
    }
  
    getRuleText(): string {
      return "Fizz";
    }
  }