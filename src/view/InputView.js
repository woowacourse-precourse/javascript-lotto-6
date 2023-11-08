import { Console } from '@woowacourse/mission-utils';
import MoneyValidator from '../validator/MoneyValidator.js';
import LottoValidator from '../validator/LottoValidator.js';
import { READ_MESSAGE } from '../constants/message.js';

class InputView {
  static async readMoney() {
    try {
      const money = await Console.readLineAsync(READ_MESSAGE.money);
      MoneyValidator.isValidMoney(money);
      return parseInt(money);
    } catch (err) {
      Console.print(err.message);
      return this.readMoney();
    }
  }

  static async readWinNumbers() {
    try {
      const numbersInput = await Console.readLineAsync(READ_MESSAGE.winNumbers);
      const winNumbers = numbersInput.split(',').map(number => number.trim());
      LottoValidator.isValidNumbers(winNumbers);
      return winNumbers.map(number => parseInt(number));
    } catch (err) {
      Console.print(err.message);
      return this.readWinNumbers();
    }
  }

  static async readBonusNumber(winNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync(READ_MESSAGE.bonusNumber);
      LottoValidator.isValidBonus(winNumbers, bonusNumber);
      return parseInt(bonusNumber);
    } catch (err) {
      Console.print(err.message);
      return this.readBonusNumber(winNumbers);
    }
  }
}

export default InputView;
