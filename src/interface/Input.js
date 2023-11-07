import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../validation/Validator.js';
import { stringToArray, stringToNumber } from '../utils/typeCasters.js';

export const Input = {
  async readMultipleValues(inputString) {
    try {
      const userInput = await Console.readLineAsync(inputString);
      Validator.CommonUserInput.validate(userInput);

      return stringToArray(userInput);
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.readMultipleValues(inputString);
    }
  },

  async readInteger(inputString) {
    try {
      const userInput = await Console.readLineAsync(inputString);

      Validator.IntegerInput.validate(stringToNumber(userInput));

      return stringToNumber(userInput);
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.readInteger(inputString);
    }
  },
};
