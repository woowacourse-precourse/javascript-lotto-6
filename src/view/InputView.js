import { MissionUtils } from '@woowacourse/mission-utils';
import {
  validateBonusNumber,
  validateWinningNumbers,
  validateMoney
} from '../utils/Validation.js';
import { ERROR_MSG } from '../utils/Constants.js';

const { Console } = MissionUtils;
class InputView {
  constructor() {
    this.winningNumbersArray = [];
    this.bonusNumber = 0;
  }

  async inputMoney() {
    let money = null;
    let valid = false;
    while (!valid) {
      try {
        money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        validateMoney(money);
        valid = true;
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    }
    return money;
  }

  async inputNumbers() {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('\n');
    this.winningNumbersArray = winningNumbers.split(',');
  }

  async repeatInputNumbers() {
    let valid = false;
    while (!valid) {
      try {
        await this.inputNumbers();
        validateWinningNumbers(this.winningNumbersArray);
        valid = true;
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    }
    return this.winningNumbersArray;
  }

  async inputBonusNumber() {
    this.bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('\n');
  }

  // 보너스 번호가 당첨번호랑 중복되는지 검사
  checkBonusInWinningNumbers() {
    if (this.winningNumbersArray.includes(this.bonusNumber)) {
      throw new Error(ERROR_MSG.BONUS_IN_WINNING);
    }
  }

  async repeatInputBonusNumber() {
    let valid = false;
    while (!valid) {
      try {
        await this.inputBonusNumber();
        validateBonusNumber(this.bonusNumber);
        this.checkBonusInWinningNumbers();
        valid = true;
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    }
    return this.bonusNumber;
  }
}

export default InputView;
