import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage';

const Input = {
    readMoney(){
        return Console.readLineAsync(GAME_MESSAGE.readMoney);
    },
    purchase(){
        return Console.readLineAsync(GAME_MESSAGE.purchase);
    },
    readWinnigNumber(){
        return Console.readLineAsync(GAME_MESSAGE.readWinnigNumber);
    },
    readBonusNumber(){
        return Console.readLineAsync(GAME_MESSAGE.readBonusNumber);    
    },
}

const Output = {
    printResultHeader(){
        Console.print(GAME_MESSAGE.resultHeader);
    },
    printThreeMatch(num){
        Console.print(`${GAME_MESSAGE.threeMatch}${GAME_MESSAGE.dash}${num}${GAME_MESSAGE.numberSuffix}`);
    },
    printFourMatch(num){
        Console.print(`${GAME_MESSAGE.fourMatch}${GAME_MESSAGE.dash}${num}${GAME_MESSAGE.numberSuffix}`);
    },
    printFiveMatch(num){
        Console.print(`${GAME_MESSAGE.fiveMatch}${GAME_MESSAGE.dash}${num}${GAME_MESSAGE.numberSuffix}`);
    },
    printFiveWithBonus(num){
        Console.print(`${GAME_MESSAGE.fiveMatchWithBonus}${GAME_MESSAGE.dash}${num}${GAME_MESSAGE.numberSuffix}`);
    },
    printSixMatch(num){
        Console.print(`${GAME_MESSAGE.sixMatch}${GAME_MESSAGE.dash}${num}${GAME_MESSAGE.numberSuffix}`);
    },
    printResultRate(rate){
        Console.print(`${GAME_MESSAGE.resultRate} ${rate}${GAME_MESSAGE.resultSuffix}`);
    },
}

export default Input;Output;