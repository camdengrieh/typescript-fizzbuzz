import { expect } from 'chai';
import {mock, instance, when, verify, anyNumber, resetCalls} from 'ts-mockito';
import Game from "../../../src/gameController/GameController"
import BuzzRule from '../../../src/rules/BuzzRule';
import FizzRule from '../../../src/rules/FizzRule';
import FizzBuzzRule from '../../../src/rules/FizzBuzzRule'
import RuleStorage from '../../../src/storage/RulesStorage'


// TODO 
describe('Testing the functionality of the game', () => {

describe('Testing Game Controller - When a number is passed into start()...', () => {

    let mockedFizz: FizzRule = mock(FizzRule);
    let mockedBuzz: BuzzRule = mock(BuzzRule);
    let mockedFizzBuzz: FizzBuzzRule = mock(FizzBuzzRule);
    let mockedStorage: RuleStorage = mock(RuleStorage);

    let mockedGame: Game = new Game(instance(mockedStorage));

  

    beforeEach(() => {
        resetCalls(mockedGame);
   });
    it("check getRuleText is called by the amount of numbers in the sequence - 1 to number(argument)", () => {
        let mGame: Game = instance(mockedGame);
        
        //Start the game and pass in 10 numbers - 1 to 10
        mGame.start(10);

        //
        verify(mockedGame.getRuleText(anyNumber())).times(10);



    });
    it("check number is replaced by the rule text if its divisbile by a rule", () => {
    

    });
    })
});