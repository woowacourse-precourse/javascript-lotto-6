import { Console } from '@woowacourse/mission-utils';
import { validators } from '../utils/Validator.js';

export const Inputs = {
  async getAmount(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);

    Console.print('');

    return Number(userInput);
  },

  async getWinningNumber(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);
    const userInputList = userInput
      .split(',')
      .map((element) => parseInt(element, 10));

    Console.print('');

    return userInputList;
  },

  async getBonusNumber(message, winningNumber) {
    const userInput = parseInt(await Console.readLineAsync(`${message}\n`), 10);
    validators.validateBonusNum(userInput, winningNumber);
    Console.print('');

    return userInput;
  },
};
