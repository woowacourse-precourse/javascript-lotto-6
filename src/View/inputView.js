import { Console } from '@woowacourse/mission-utils';
import validator from '../utils/validator.js';

const inputView = {
  async readPurchasePriceAsync(message) {
    const userInput = await Console.readLineAsync(message);
    validator.validatePrice(userInput);
    return userInput / 1000;
  },

  async readWinningNumbersAsync(message) {
    const userInput = await Console.readLineAsync(message);
    const numbers = userInput.split(',').map((number) => parseInt(number));
    return numbers;
  },

  async readBonusNumberAsync(message) {
    return await Console.readLineAsync(message);
  },
};

export default inputView;
