import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/message.js';

const LOTTO_VIEW = Object.freeze({
  getUserInputTotalBuyPrice() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_TOTAL_BUY_PRICE);
  },
  getUserInputCorrectNumber() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_CORRECT_NUMBER);
  },
  getUserInputBonusNumber() {
    return Console.readLineAsync(MESSAGES.USER_INPUT_LOTTO_CORRECT_NUMBER);
  },
  printBuyMessage(count) {
    return Console.print(`${count}${MESSAGES.BUY_MESSAGE}`);
  },
});

export default LOTTO_VIEW;
