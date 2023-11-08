import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, MESSAGE } from './constants/constants.js';

class User {
  #lottoCount;

  #winningNumbers;

  #bonusNumber;

  //   구입 금액
  async inputMoney() {
    const money = await Console.readLineAsync(MESSAGE.MONEY_SPENT);

    if (!this.#moneyValidate(money)) {
      Console.print(ERROR_MESSAGE.MONEY_SPENT);
      return this.inputMoney();
    }

    this.#lottoCount = Math.floor(parseInt(money, 10) / 1000);
  }

  #moneyValidate(money) {
    const regex = /^[0-9]*$/;
    return regex.test(money) && money % 1000 === 0;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  //   당첨 번호
  async inputWinningNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.LOTTO_NUMBER);

    const splitNumbers = numbers.split(',').map(Number);
    if (!this.#numbersValidate(splitNumbers)) {
      Console.print(ERROR_MESSAGE.LOTTO_NUMBER);
      return this.inputWinningNumbers();
    }

    this.#winningNumbers = splitNumbers;
  }

  #numbersValidate(numbers) {
    const numbersSet = new Set(numbers);
    return (
      numbers.length === 6 &&
      numbersSet.size === 6 &&
      numbers.every(
        (number) => Number.isInteger(number) && number > 0 && number <= 45,
      )
    );
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  //   보너스 번호
  async inputBonusNumber() {
    const number = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);

    const bonusNumber = Number(number);
    if (!this.#bonusNumberValidate(bonusNumber)) {
      Console.print(ERROR_MESSAGE.BONUS_NUMBER);
      return this.inputBonusNumber();
    }

    this.#bonusNumber = bonusNumber;
  }

  #bonusNumberValidate(number) {
    return (
      Number.isInteger(number) &&
      number > 0 &&
      number <= 45 &&
      !this.#winningNumbers.includes(number)
    );
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default User;
