import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../validation/Validator.js';
import { stringToArray, stringToNumber } from '../utils/typeCasters.js';
import { CustomError } from '../error/Error.js';

export const Input = {
  async readMultipleValues(inputString) {
    const userInput = await Console.readLineAsync(inputString);

    return stringToArray(userInput);
  },

  async readInteger(inputString) {
    const userInput = await Console.readLineAsync(inputString);

    return stringToNumber(userInput);
  },
};
