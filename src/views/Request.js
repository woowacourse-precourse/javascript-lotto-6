import prompt from './prompt.js';
import validate from '../domains/validation.js';
import { REQUEST } from '../constants.js';

class Request {
  static async money() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in(REQUEST.MONEY);
        validate.money(input);
        condition = true;
        return Number(input);
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }

  static async winningNumbers() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in(REQUEST.WINNING_NUMBERS);
        const checkInput = validate.winningNumbers(input);
        condition = true;
        return checkInput;
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }

  static async bonusNumber() {
    let condition = false;
    while (!condition) {
      try {
        const input = await prompt.in(REQUEST.BONUS_NUMBER);
        validate.bonusNumber(input);
        condition = true;
        return Number(input);
      } catch (error) {
        prompt.out(error.message);
      }
    }
  }
}

export default Request;
