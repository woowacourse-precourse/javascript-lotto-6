import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages.js';

const inputView = {
  async money() {
    const input = await Console.readLineAsync(INPUT.MONEY);
    return input;
  },

  async winnerNumbers() {
    const input = await Console.readLineAsync(INPUT.WINNER_NUMBERS);
    return input;
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(INPUT.BONUS_NUMBER);
    return input;
  },
};

export default inputView;
