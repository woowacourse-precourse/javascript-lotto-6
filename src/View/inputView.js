import { Console } from '@woowacourse/mission-utils';
import validator from '../utils/validator.js';

const inputView = {
  async readPurchasePriceAsync(message) {
    const userInput = await Console.readLineAsync(message);
    validator.validatePrice(userInput);
    return parseInt(userInput);
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
