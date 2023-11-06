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

  async getPrice() {
    let validInput = false;
    while (!validInput) {
      this.price = await Console.readLineAsync(PromptMessage.ENTER_PRICE);
      try {
        Validator.validatePrice(this.price);
        validInput = true;
      } catch (error) {
        Console.print('[ERROR] 올바른 금액을 입력하십시오\n');
      }
    }
  }

  async getWinNum() {
    let validInput = false;
    while (!validInput) {
      const winNum = await Console.readLineAsync(PromptMessage.ENTER_WIN_NUM);
      this.winNum = winNum.split(',').map((e) => parseInt(e.trim(), 10));
      try {
        Validator.validateWinNum(this.winNum);
        validInput = true;
      } catch (error) {
        Console.print('[ERROR] 올바른 당첨 번호를 입력하십시오\n');
      }
    }
  }

  // async getBonusNum() {
  //   const bonusNum = await Console.readLineAsync(PromptMessage.ENTER_BONUS_NUM);
  //   this.bonusNum = parseInt(bonusNum, 10);
  // }

  async getBonusNum() {
    let validInput = false;
    while (!validInput) {
      const bonusNum = await Console.readLineAsync(
        PromptMessage.ENTER_BONUS_NUM,
      );
      this.bonusNum = parseInt(bonusNum, 10);
      try {
        Validator.validateBonusNum(this.bonusNum, this.winNum);
        validInput = true;
      } catch (error) {
        Console.print('[ERROR] 올바른 보너스 번호를 입력하십시오\n');
      }
    }
  }
}

export default InputView;
