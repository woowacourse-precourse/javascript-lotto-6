import { LOTTO_NUMBER_RANGE } from './constants/lottoNumber.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_NUMBER_RANGE.count) {
      throw new Error(ERROR_MESSAGE.notNumberLengthSixException);
    }

    if (new Set(numbers).size !== LOTTO_NUMBER_RANGE.count) {
      throw new Error(ERROR_MESSAGE.notDuplicateWinningNumberException);
    }

    numbers.forEach(number => {
      this.#validateNumberCase(number);
    });
  }

  validateBonusNumber(bonusNumber) {
    this.#validateNumberCase(bonusNumber);
  }

  #validateNumberCase(number) {
    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR_MESSAGE.notNumberException);
    }

    if (Number(number) < LOTTO_NUMBER_RANGE.minimum || Number(number) > LOTTO_NUMBER_RANGE.maximum) {
      throw new Error(ERROR_MESSAGE.numberRangeException);
    }
  }

  calculateLottoResult(userLottoNumbers, bonusNumber) {
    const results = [0, 0, 0, 0, 0];

    userLottoNumbers.forEach(lottoNumber => {
      const count = this.#getCount(lottoNumber);

      if (count == 5 && lottoNumber.indexOf(bonusNumber) !== -1) {
        results[count - 2] += 1;
      } else {
        results[count - 3] += 1;
      }
    });

    return results;
  }

  #getCount(lottoNumber) {
    let count = 0;

    lottoNumber.forEach(number => {
      if (this.#numbers.indexOf(number) !== -1) count += 1;
    });

    return count;
  }

  calculateEarningsRate(results) {
    const amount = [5000, 50000, 1500000, 30000000, 2000000000];
    let i = 0;

    const earnings = results.reduce((acc, curr) => {
      return acc + (curr * amount[i++]);
    }, 0);

    return earnings;
  }
}

export default Lotto;
