import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';

class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.THE_NUMBER);
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.OVERLAP);
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number) || number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_CONDITION);
      }
    });
  }

  async inputWinningNumbers() {
    let winningNumbers;
    try {
      winningNumbers = (await Console.readLineAsync(LOTTO_MESSAGE.WINNING_INPUT))
        .split(',')
        .map((number) => Number(number));
      this.#validate(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      winningNumbers = await this.inputWinningNumbers();
    }
    this.#winningNumbers = winningNumbers;
  }

  async inputBonusNumber() {
    let bonusNumber;
    try {
      bonusNumber = Number(await Console.readLineAsync(LOTTO_MESSAGE.BONUS_INPUT));
      if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_CONDITION);
      } else if (this.#winningNumbers.includes(bonusNumber)) {
        throw new Error(ERROR_MESSAGE.OVERLAP);
      }
    } catch (error) {
      Console.print(error.message);
      bonusNumber = await this.inputBonusNumber();
    }
    this.#bonusNumber = bonusNumber;
  }

  getWinningLottoInfo() {
    return {
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default WinningLotto;
