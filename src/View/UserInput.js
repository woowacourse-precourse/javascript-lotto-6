import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE, LOTTO_NUMBER } from '../Utils/constants.js';
class Input {
  constructor() {
    this.lottoNumbers = [];
  }

  async userPurchase() {
    try {
      Console.print(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const input = await Console.readLineAsync('');
      const purchaseAmount = parseInt(input);

      if (isNaN(purchaseAmount) || purchaseAmount <= LOTTO_NUMBER.INITNUM || purchaseAmount % LOTTO_NUMBER.MIN_PURCHASE !== LOTTO_NUMBER.INITNUM) {
        throw new Error(ERROR_MESSAGE.USER_INPUT_PURCHASE);
      }

      if (input.split('').some(char => !LOTTO_NUMBER.CONDITION_NUM.includes(char))) {
        throw new Error(ERROR_MESSAGE.USER_INPUT_ONLYNUM);
      }
      return input;
    } catch (error) {
      Console.print(error.message);
      return this.userPurchase();
    }
  }

  async userNumber() {
    try {
      Console.print(INPUT_MESSAGE.WINNING_NUMBER);
      const lottoNumbers = await Console.readLineAsync('');
      if (!/^\d+(,\d+){5}$/.test(lottoNumbers)) {
        throw new Error(ERROR_MESSAGE.USER_INPUT_NUMBERS);
      }
      this.lottoNumbers = lottoNumbers.split(',').map(num => parseInt(num.trim()));
      this.checkForDuplicates(this.lottoNumbers);

      return this.lottoNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.userNumber();
    }
  }

  async userBonusNumber() {
    try {
      Console.print(INPUT_MESSAGE.BONUS_NUMBER);
      const input = await Console.readLineAsync('');
      const bonusNumber = parseInt(input);
      if (isNaN(bonusNumber) || bonusNumber < LOTTO_NUMBER.CONDITION_MIN || bonusNumber > LOTTO_NUMBER.CONDITION_MAX) {
        throw new Error(ERROR_MESSAGE.USER_INPUT_BONUSE);
      }
      const allNumbers = [...this.lottoNumbers, bonusNumber];
      this.checkForDuplicates(allNumbers);
      if (!/^\d+$/.test(input) || parseInt(input) < LOTTO_NUMBER.CONDITION_MIN || parseInt(input) > LOTTO_NUMBER.CONDITION_MAX) {
        throw new Error(ERROR_MESSAGE.USER_INPUT_ONLYNUM);
      }
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return this.userBonusNumber();
    }
  }

  checkForDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.USER_INPUT_DUPLICATE);
    }
  }
}

export default Input;