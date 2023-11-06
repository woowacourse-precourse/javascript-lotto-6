import { MissionUtils } from '@woowacourse/mission-utils';
import {
  validateBonusNumber,
  validateWinningNumbers,
  validateMoney
} from '../utils/Validation.js';

const { Console } = MissionUtils;
class InputView {
  static async inputMoney() {
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

  static async inputNumbers() {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    Console.print('\n');
    const winningNumbersArray = winningNumbers.split(',');
    return winningNumbersArray;
  }

  static async repeatInputNumbers() {
    let numbers = null;
    let valid = false;
    while (!valid) {
      try {
        numbers = await this.inputNumbers();
        validateWinningNumbers(numbers);
        valid = true;
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    }
    return numbers;
  }

  static async inputBonusNumber() {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    Console.print('\n');
    return bonusNumber;
  }

  static async repeatInputBonusNumber() {
    let bonusNumber = null;
    let valid = false;
    while (!valid) {
      try {
        bonusNumber = await this.inputBonusNumber();
        validateBonusNumber(bonusNumber);
        valid = true;
      } catch (error) {
        Console.print(error.message);
        valid = false;
      }
    }
    return bonusNumber;
  }
}

export default InputView;
