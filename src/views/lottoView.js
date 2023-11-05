import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/message.js';
import MATCHES from '../constants/matches.js';

const LOTTO_VIEW = Object.freeze({
  getUserInputTotalBuyPrice() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_TOTAL_BUY_PRICE);
  },
  getUserInputCorrectNumber() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_CORRECT_NUMBER);
  },
  getUserInputBonusNumber() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_BONUS_NUMBER);
  },
  printBuyMessage(count) {
    return Console.print(`${count}${MESSAGES.BUY_MESSAGE}`);
  },
  printResult(result) {
    Console.print(MESSAGES.totalWinning);
    Object.keys(result).forEach((key) => {
      Console.print(`${MATCHES[key].message} - ${result[key]}개`);
    });
  },
});

export default LOTTO_VIEW;
