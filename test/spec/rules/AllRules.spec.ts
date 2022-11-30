import { expect } from 'chai';
import {mock, instance, when, verify, anyNumber, resetCalls} from 'ts-mockito';
import  FizzRule from '../../../src/rules/FizzRule';
import BuzzRule from '../../../src/rules/BuzzRule';
import FizzBuzzRule from '../../../src/rules/FizzBuzzRule';
//import { expect } from '../../utils/expects'

describe('Testing the rules of the game', () => {

describe('Testing Fizz Rules - When a number is passed into divisible()...', () => {

    let mockedFizz: FizzRule = mock(FizzRule);

    beforeEach(() => {
        resetCalls(mockedFizz);
   });
    it("check number is divisible by 3 - return if True", () => {
        let fizz: FizzRule = new FizzRule;
        let mFizz: FizzRule = instance(mockedFizz);
        
        //when there is a sequence of 15 numbers from 1 to 15
        for(let i: number = 1; i <= 15; i++) {
            //divisible returns true if (i % 3 === 0)
            if (fizz.divisible(i)) {
                mFizz.divisible(i);
            };
        }
        //then true is returned 5 times if divisible by 3
        verify(mockedFizz.divisible(anyNumber())).times(5);

        //verify numbers that are divisible by 3, return true
        expect(fizz.divisible(3)).to.be.equal(true);
        expect(fizz.divisible(15)).to.be.equal(true);


    });
    it("check number is NOT divisible by 3 - return if False", () => {
        let fizz: FizzRule = new FizzRule;
        let mFizz: FizzRule = instance(mockedFizz);
        
        //when there is a sequence of 15 numbers from 1 to 15
        for(let i: number = 1; i <= 15; i++) {
            //divisible returns true if (i % 3 === 0)
            if (!fizz.divisible(i)) {
                mFizz.divisible(i);
            };
        }
        // false is returned 10 times if NOT divisible by 3
        verify(mockedFizz.divisible(anyNumber())).times(10);

        //verify numbers that are NOT divisible by 3, return false
        expect(fizz.divisible(5)).to.be.equal(false);
        expect(fizz.divisible(11)).to.be.equal(false);

    });
    })
    
describe('Testing Buzz Rules - When a number is passed into divisible()...', () => {

    let mockedBuzz: BuzzRule = mock(BuzzRule);

    beforeEach(() => {
        resetCalls(mockedBuzz);
   });
    it("check number is divisible by 5 - return if True", () => {
        let buzz: BuzzRule = new BuzzRule;
        let mBuzz: BuzzRule = instance(mockedBuzz);
        
        //when there is a sequence of 15 numbers from 1 to 15
        for(let i: number = 1; i <= 15; i++) {
            //divisible returns true if (i % 5 === 0)
            if (buzz.divisible(i)) {
                mBuzz.divisible(i);
            };
        }
        //then true is returned 5 times if divisible by 5
        verify(mockedBuzz.divisible(anyNumber())).times(3);

        //verify numbers that are divisible by 5, return true
        expect(buzz.divisible(5)).to.be.equal(true);
        expect(buzz.divisible(10)).to.be.equal(true);


    });
    it("check number is NOT divisible by 5 - return if False", () => {
        let buzz: BuzzRule = new BuzzRule;
        let mBuzz: BuzzRule = instance(mockedBuzz);
        
        //when there is a sequence of 15 numbers from 1 to 15
        for(let i: number = 1; i <= 15; i++) {
            //divisible returns true if (i % 5 === 0)
            if (!buzz.divisible(i)) {
                mBuzz.divisible(i);
            };
        }
        // false is returned 10 times if NOT divisible by 5
        verify(mockedBuzz.divisible(anyNumber())).times(12);

        //verify numbers that are NOT divisible by 5, return false
        expect(buzz.divisible(3)).to.be.equal(false);
        expect(buzz.divisible(12)).to.be.equal(false);

    });
    })

describe('Testing FizzBuzz Rules - When a number is passed into divisible()...', () => {

        let mockedFizzBuzz: FizzBuzzRule = mock(FizzBuzzRule);
    
        beforeEach(() => {
            resetCalls(mockedFizzBuzz);
       });
        it("check number is divisible by 3 and 5 - return if True", () => {
            let fizzBuzz: FizzBuzzRule = new FizzBuzzRule;
            let mFizzBuzz: FizzBuzzRule = instance(mockedFizzBuzz);
            
            //when there is a sequence of 15 numbers from 1 to 15
            for(let i: number = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0 && i % 5 === 0)
                if (fizzBuzz.divisible(i)) {
                    mFizzBuzz.divisible(i);
                };
            }
            //then true is returned 5 times if divisible by 3 and 5
            verify(mockedFizzBuzz.divisible(anyNumber())).once();
    
            //verify numbers that are divisible by 3 and 5, return true
            expect(fizzBuzz.divisible(15)).to.be.equal(true);
    
    
        });
        it("check number is NOT divisible by 3 and 5 - return if False", () => {
            let fizzBuzz: FizzBuzzRule = new FizzBuzzRule;
            let mFizzBuzz: FizzBuzzRule = instance(mockedFizzBuzz);
            
            //when there is a sequence of 15 numbers from 1 to 15
            for(let i: number = 1; i <= 15; i++) {
                //divisible returns true if (i % 3 === 0 && i % 5 === 0)
                if (!fizzBuzz.divisible(i)) {
                    mFizzBuzz.divisible(i);
                };
            }
            // false is returned 10 times if NOT divisible by 3 and 5
            verify(mockedFizzBuzz.divisible(anyNumber())).times(14);
    
            //verify numbers that are NOT divisible by 3 and 5, return false
            expect(fizzBuzz.divisible(3)).to.be.equal(false);
            expect(fizzBuzz.divisible(5)).to.be.equal(false);
            expect(fizzBuzz.divisible(10)).to.be.equal(false);
    
        });
        })
});