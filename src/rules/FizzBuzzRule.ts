import RuleInterface from "../interfaces/RuleInterfaces";

export default  class FizzBuzzRule implements RuleInterface {
    divisible(number: number): boolean {
      return number % 3 === 0 && number % 5 === 0;
    }
  
    getRuleText(): string {
      return "FizzBuzz";
    }
  }