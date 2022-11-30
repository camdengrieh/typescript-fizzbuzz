import { Inject } from "typescript-ioc";
import RuleInterface from "../interfaces/RuleInterfaces";

export default class RuleStorage {
    @Inject
    rules: RuleInterface[] = [];

    constructor(@Inject _rules: RuleInterface[]){
      for(let i = 0; i < _rules.length; i++){
      this.rules.push(_rules[i]);
      }
    }

  }