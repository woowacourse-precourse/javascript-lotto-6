import { Console } from '@woowacourse/mission-utils';
import { Validator } from './validation.js';

export const print = (message) => Console.print(message);

export const readLineAsync = async (message) => Console.readLineAsync(message);

export const getAndValidateInput = async (message, validationList) => {
  let userInput;
  while (true) {
    try {
      userInput = await readLineAsync(message);
      Validator.validateInput(userInput, validationList);
      break;
    } catch (error) {
      print(error.message);
    }
  }

  return userInput;
};