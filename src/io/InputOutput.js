import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage';

const lottoInput = {
    readMoney() {
        return Console.readLineAsync(GAME_MESSAGE.READ_MONEY);
    },    
    readWinningNumber() {
        return Console.readLineAsync(GAME_MESSAGE.READ_WINNING_NUMBER);
    },
    readBonusNumber() {
        return Console.readLineAsync(GAME_MESSAGE.READ_BONUS_NUMBER);    
    },
}

const lottoOutput = {
    printPurchase(tickets) {
        Console.print(`${tickets}${GAME_MESSAGE.PURCHASE}`);
    },
    printResultHeader() {
        Console.print(GAME_MESSAGE.RESULT_HEADER);
    },    
    printResultRate(rate) {
        Console.print(`${GAME_MESSAGE.RESULT_RATE} ${rate}${GAME_MESSAGE.RESULT_SUFFIX}`);
    },
    printLine() {
        Console.print('');
    },
    printWinningList(winningList) {
        for (let i = 0; i < winningList.length; i++) {
            printWinnings[i](winningList[i]);
        }
    },
}

const printWinnings = [
    function printThreeMatch(num) {
        Console.print(`${GAME_MESSAGE.THREE_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    function printFourMatch(num) {
        Console.print(`${GAME_MESSAGE.FOUR_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    function printFiveMatch(num) {
        Console.print(`${GAME_MESSAGE.FIVE_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    function printFiveWithBonus(num) {
        Console.print(`${GAME_MESSAGE.FIVE_MATCH_WITH_BONUS}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    },
    function printSixMatch(num) {
        Console.print(`${GAME_MESSAGE.SIX_MATCH}${GAME_MESSAGE.DASH}${num}${GAME_MESSAGE.NUMBER_SUFFIX}`);
    }
];

export {lottoInput,lottoOutput};