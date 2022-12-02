import { Inject } from "typescript-ioc";
import RuleInterface from "../interfaces/RuleInterfaces";

export default class RuleStorage {
    rules: RuleInterface[];

    constructor(_rules: RuleInterface[]){
        this.rules = _rules
    }
    

  }