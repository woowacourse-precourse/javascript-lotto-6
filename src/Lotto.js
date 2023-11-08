import { MissionUtils } from '@woowacourse/mission-utils';
import { hasDuplicates, numberWithCommas } from './utils.js';
import { ERROR_MESSAGE } from '../constants/index.js';

class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validateDuplication(numbers);
    this.#validateNumberOfElements(numbers);
    this.#numbers = numbers;
  }

  getRank(winningNumbers, bonusNumber) {
    let winningNumberCount = 0;
    winningNumbers.forEach(winningNumber => {
      const isIncluded = this.#numbers.includes(winningNumber);
      if (isIncluded) {
        winningNumberCount++;
      }
    });
    const isBonusNumberIncluded = this.#numbers.includes(bonusNumber);

    if (winningNumberCount === 6) {
      return 1;
    }
    if (winningNumberCount === 5 && isBonusNumberIncluded) {
      return 2;
    }
    if (winningNumberCount === 5 && !isBonusNumberIncluded) {
      return 3;
    }
    if (winningNumberCount === 4) {
      return 4;
    }
    if (winningNumberCount === 3) {
      return 5;
    }
    return null;
  }

  printNumbers() {
    this.#orderNumbersByASC();
    const numbers = this.#numbers.join(', ');
    MissionUtils.Console.print(`[${numbers}]`);
  }

  #validateDuplication(numbers) {
    if (hasDuplicates(numbers)) {
      throw new Error(ERROR_MESSAGE.NO_DUPLICATED_NUMBERS);
    }
  }

  #validateNumberOfElements(numbers) {
    const NUMBER_OF_ELEMENTS = 6;
    if (numbers.length !== NUMBER_OF_ELEMENTS) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_ELEMENTS_ERROR);
    }
  }

  #orderNumbersByASC() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
