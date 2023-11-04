import ERROR from './constant/error.js';
import outputView from './View/outputView.js';
import validator from './utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.NUMBER_LENGTH);
    }
    validator.isDupplicateLottoNumber(numbers);
    validator.isValidRangeNumber(numbers);
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) throw new Error(ERROR.NUMBER_RANGE);

    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR.BONUSNUMBER_DUPPLICATE);
    }
  }

  getLottoResult(myLottoNumbers, bonusNumber, purchasePrice) {
    const lottoResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    myLottoNumbers.forEach((lotto) => {
      const correctCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const bonus = lotto.includes(bonusNumber);
      if (correctCount === 3) {
        lottoResult['fifth'] += 1;
      } else if (correctCount === 4) {
        lottoResult['fourth'] += 1;
      } else if (correctCount === 5) {
        if (bonus) lottoResult['second'] += 1;
        else lottoResult['third'] += 1;
      } else if (correctCount === 6) {
        lottoResult['first'] += 1;
      }
    });

    const rate = this.#getProfitRate(lottoResult, purchasePrice);
    outputView.printLottoResult(lottoResult, rate);
  }

  #getProfitRate(lottoResult, purchasePrice) {
    let totalProfit = 0;

    totalProfit += lottoResult.first * 2000000000;
    totalProfit += lottoResult.second * 30000000;
    totalProfit += lottoResult.third * 1500000;
    totalProfit += lottoResult.fourth * 50000;
    totalProfit += lottoResult.fifth * 5000;

    return ((totalProfit / purchasePrice) * 100).toFixed(1);
  }
}

export default Lotto;
