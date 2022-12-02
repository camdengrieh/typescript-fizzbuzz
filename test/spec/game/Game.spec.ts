import { expect } from 'chai';
import {mock, instance, when, verify, anyNumber} from 'ts-mockito';
import Game from "../../../src/gameController/GameController"
import BuzzRule from '../../../src/rules/BuzzRule';
import FizzRule from '../../../src/rules/FizzRule';
import FizzBuzzRule from '../../../src/rules/FizzBuzzRule'
import RuleInterface from '../../../src/interfaces/RuleInterfaces';


// TODO 

describe('Testing Game Controller - When a number is passed into start()...', () => {

    let mockedFizz: FizzRule = mock(FizzRule);
    let mockedBuzz: BuzzRule = mock(BuzzRule);
    let mockedFizzBuzz: FizzBuzzRule = mock(FizzBuzzRule);
    let rules: RuleInterface[] = [mockedFizzBuzz, mockedBuzz, mockedFizz];

    let ruleStorage: RuleInterface;
  

    beforeEach(() => {
        ruleStorage = mock(rules);
   });
    it("check getRuleText is called by the amount of numbers in the sequence - 1 to number(argument)", () => {
        let mockedGame: Game = new Game(rules);

        let mGame: Game = instance(mockedGame);
        
        //Start the game and pass in 10 numbers - 1 to 10
        mockedGame.start(10);

        //
        verify(mGame.getRuleText(anyNumber())).times(10);



    });
    it('should return "Fizz" if the number is divisible by 3', () => {
        let game = new Game([mockedFizz]);

        when(game.getRuleText(3)).thenReturn("Fizz");
        expect(game.getRuleText(3)).to("Fizz");
      });
    
    it('should return "Buzz" if the number is divisible by 5', () => {
        let game = new Game([mockedBuzz]);

        when(game.getRuleText(5)).thenReturn("Buzz");
        expect(game.getRuleText(5)).to("Buzz");
    })

    it('should return "FizzBuzz" if the number is divisible by 3 and 5', () => {
        let game = new Game([mockedFizzBuzz]);

        when(game.getRuleText(15)).thenReturn("FizzBuzz");
        expect(game.getRuleText(15)).to("FizzBuzz");
    })
    })
