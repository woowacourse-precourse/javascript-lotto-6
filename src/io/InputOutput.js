import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage';

const lottoInput = {
    readMoney(){
        return Console.readLineAsync(GAME_MESSAGE.READ_MONEY);
    },    
    readWinnigNumber(){
        return Console.readLineAsync(GAME_MESSAGE.READ_WINNIG_NUMBER);
    },
    readBonusNumber(){
        return Console.readLineAsync(GAME_MESSAGE.READ_BONUS_NUMBER);    
    },
}

const lottoOutput = {
    printPurchase(tickets){
        Console.print(`${tickets}${GAME_MESSAGE.PURCHASE}`);
    },
    printResultHeader(){
        Console.print(GAME_MESSAGE.RESULT_HEADER);
    },
    printThreeMatch(num){
        Console.print(`${GAME_MESSAGE.THREE_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    printFourMatch(num){
        Console.print(`${GAME_MESSAGE.FOUR_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    printFiveMatch(num){
        Console.print(`${GAME_MESSAGE.FIVE_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    printFiveWithBonus(num){
        Console.print(`${GAME_MESSAGE.FIVE_MATCH_WITH_BONUS}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    printSixMatch(num){
        Console.print(`${GAME_MESSAGE.SIX_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    printResultRate(rate){
        Console.print(`${GAME_MESSAGE.RESULTRATE} ${rate}${GAME_MESSAGE.RESULTSUFFIX}`);
    },
    printLine(){
        Console.print('');
    },
}

export {lottoInput,lottoOutput};