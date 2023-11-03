import { Console } from '@woowacourse/mission-utils';
import validator from '../utils/validator.js';

const inputView = {
  async readPurchasePriceAsync(message) {
    try {
      const userInput = await Console.readLineAsync(message);
      validator.validatePrice(userInput);
      return parseInt(userInput);
    } catch (e) {
      return await this.readPurchasePriceAsync(message);
    }
  },

  async readWinningNumbersAsync(message) {
    const userInput = await Console.readLineAsync(message);
    const numbers = userInput.split(',').map((number) => parseInt(number));
    return numbers;
  },

  async readBonusNumberAsync(message) {
    const userInput = await Console.readLineAsync(message);
    return parseInt(userInput);
  },
};

export default inputView;
