import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constants/PromptMessage.js';
import Validator from '../utils/Validator.js';

class InputView {
  constructor() {
    this.price = 0;
    this.winNum = [];
    this.bonusNum = 0;
  }

  static async getReInput(promptMessage, validationFunction) {
    let validInput = false;
    let userInput;

    while (!validInput) {
      userInput = await Console.readLineAsync(promptMessage);
      try {
        validInput = validationFunction(userInput);
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
    return userInput;
  }

  async getPrice() {
    this.price = await InputView.getReInput(
      PromptMessage.ENTER_PRICE,
      (input) => {
        Validator.validatePrice(input);
        return true;
      },
    );
  }

  async getWinNum() {
    this.winNum = await InputView.getReInput(
      PromptMessage.ENTER_WIN_NUM,
      (input) => {
        const winNum = input.split(',').map((num) => parseInt(num.trim(), 10));
        Validator.validateWinNum(winNum);
        return true;
      },
    );
  }

  async getBonusNum() {
    this.bonusNum = await InputView.getReInput(
      PromptMessage.ENTER_BONUS_NUM,
      (input) => {
        const { winNum } = this;
        const bonusNum = parseInt(input, 10);
        Validator.validateBonusNum(bonusNum, winNum);
        return true;
      },
    );
    this.bonusNum = parseInt(this.bonusNum, 10);
  }
}

export default InputView;
