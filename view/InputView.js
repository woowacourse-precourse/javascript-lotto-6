import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constants/PromptMessage.js';
import Validator from '../utils/Validator.js';

class InputView {
  constructor() {
    this.price = 0;
    this.count = 0;
    this.winNum = [];
    this.bonusNum = 0;
  }

  async getInput(promptMessage, validationFunction) {
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
    this.price = await this.getInput(PromptMessage.ENTER_PRICE, (input) => {
      Validator.validatePrice(input);
      return true;
    });
  }

  async getWinNum() {
    this.winNum = await this.getInput(PromptMessage.ENTER_WIN_NUM, (input) => {
      const winNum = input.split(',').map((e) => parseInt(e.trim(), 10));
      Validator.validateWinNum(winNum);
      return true;
    });
  }

  async getBonusNum() {
    this.bonusNum = await this.getInput(
      PromptMessage.ENTER_BONUS_NUM,
      (input) => {
        const { winNum } = this;
        const bonusNum = parseInt(input, 10);
        Validator.validateBonusNum(bonusNum, winNum);
        return true;
      },
    );
  }
}

export default InputView;
