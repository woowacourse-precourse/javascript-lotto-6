import ERROR from './constant/error.js';
import outputView from './View/outputView.js';
import validator from './utils/validator.js';
import WINNING_PRICE from './constant/price.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
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
    if (this.#numbers.includes(bonusNumber)) throw new Error(ERROR.BONUSNUMBER_DUPPLICATE);
  }

  getLottoResult(myLottoNumbers, bonusNumber, purchasePrice) {
    const lottoResult = this.#compareWinningNumber(myLottoNumbers, bonusNumber);
    const rate = this.#getProfitRate(lottoResult, purchasePrice);
    outputView.printLottoResult(lottoResult, rate);
  }

  #compareWinningNumber(myLottoNumbers, bonusNumber) {
    const lottoResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    myLottoNumbers.forEach((lotto) => {
      const correctCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const bonus = lotto.includes(bonusNumber);
      if (correctCount === 3) lottoResult['fifth'] += 1;
      else if (correctCount === 4) lottoResult['fourth'] += 1;
      else if (correctCount === 5) {
        if (bonus) lottoResult['second'] += 1;
        else lottoResult['third'] += 1;
      } else if (correctCount === 6) lottoResult['first'] += 1;
    });
    return lottoResult;
  }

  #getProfitRate(lottoResult, purchasePrice) {
    let totalProfit = 0;
    for (let key in lottoResult) {
      totalProfit += lottoResult[key] * WINNING_PRICE[key];
    }
    return ((totalProfit / purchasePrice) * 100).toFixed(1);
  }
}

export default Lotto;
