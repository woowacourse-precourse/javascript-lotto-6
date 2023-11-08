import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/messages.js';

const inputView = {
  async money() {
    const input = await Console.readLineAsync(INPUT_MSG.MONEY);
    return input;
  },

  async winnerNumbers() {
    const input = await Console.readLineAsync(INPUT_MSG.WINNER_NUMBERS);
    return input;
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(INPUT_MSG.BONUS_NUMBER);
    return input;
  },
};

export default inputView;
