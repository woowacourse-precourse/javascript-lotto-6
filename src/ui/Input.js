import { Console } from '@woowacourse/mission-utils';

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

  async getBonusNumber(message) {
    const userInput = await Console.readLineAsync(`${message}\n`);

    Console.print('');

    return userInput;
  },
};
