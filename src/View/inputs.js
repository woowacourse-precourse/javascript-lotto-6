import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const inputs = {
  async buyLotto() {
    const priceAnswer = await Console.readLineAsync(
      MESSAGE.input.purchasePrice,
    );
    return priceAnswer;
  },

  async enterWinningNumbers() {
    const numbersAnswer = await Console.readLineAsync(
      MESSAGE.input.winningNumbers,
    );
    return numbersAnswer;
  },

  async enterBonusNumber() {
    const numberAnswer = await Console.readLineAsync(MESSAGE.input.bonusNumber);
    return numberAnswer;
  },
};

export default inputs;
