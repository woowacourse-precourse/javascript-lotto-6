import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.notNumberLengthSixException);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.notDuplicateWinningNumberException);
    }

    numbers.forEach(number => {
      if (number.trim() === '') {
        throw new Error(ERROR_MESSAGE.notNumberException);
      }

      if (Number.isNaN(Number(number))) {
        throw new Error(ERROR_MESSAGE.notNumberException);
      }

      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error(ERROR_MESSAGE.numberRangeException);
      }
    });
  }

  validateBonusNumber(bonusNumber) {
    if (number.trim() === '') {
      throw new Error(ERROR_MESSAGE.notNumberException);
    }

    if (Number.isNaN(Number(number))) {
      throw new Error(ERROR_MESSAGE.notNumberException);
    }

    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error(ERROR_MESSAGE.numberRangeException);
    }
  }

  calculateLottoResult(userLottoNumbers, bonusNumber) {
    const results = [0, 0, 0, 0, 0];

    userLottoNumbers.forEach(lottoNumber => {
      let count = 0;
      // 로또 번호 안에 당첨 번호가 있는지 확인
      lottoNumber.forEach(number => {
        if (this.#numbers.indexOf(number) !== -1) {
          count += 1;
        }
      });

      if (count == 5 && lottoNumber.indexOf(bonusNumber) !== -1) {
        results[count - 2] += 1;
      } else {
        results[count - 3] += 1;
      }
    });

    return results;
  }

  calculateEarningsRate(results) {
    const amount = [5000, 50000, 1500000, 30000000, 2000000000];

    let i = 0;
    const earnings = (results.reduce((acc, curr) => {
      return acc + (curr * amount[i++]);
    }, 0));

    return earnings;
  }
}

export default Lotto;
