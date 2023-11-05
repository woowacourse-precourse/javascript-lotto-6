import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../validation/Validator.js';
import { stringToArray, stringToNumber } from '../utils/typeCasters.js';

export const Input = {
  async readMultipleValues(inputString) {
    try {
      const userInput = await Console.readLineAsync(inputString);
      Validator.CommonUserInput.multipleValue.validate(stringToArray(userInput));

      return stringToArray(userInput);
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
    }
  },

  async readInteger(inputString) {
    try {
      const userInput = await Console.readLineAsync(inputString);
      Validator.CommonUserInput.integerValue.validate(stringToNumber(userInput));

      return stringToNumber(userInput);
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
    }
  },
};
