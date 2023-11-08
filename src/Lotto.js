import { ERROR_MESSAGE } from './message';
import { CONSTANT } from './constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // test code
    if (numbers.length === CONSTANT.ZERO) throw new Error(ERROR_MESSAGE.LOTTO_EMPTY);
    if (numbers.length !== CONSTANT.NUMBER_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.SIX_NUMBERS);
    }
    if (this.checkRange(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
    const numbersSet = this.getNumbersSet(numbers);
    if ([...numbersSet].length !== CONSTANT.NUMBER_MAX_LENGTH)
      throw new Error(ERROR_MESSAGE.SAME_NUMBERS);
  }
  // test code
  checkRange(numbers) {
    return numbers.filter(value => 1 > value || value > 45).length;
  }

  getNumbersSet(numbers) {
    return new Set(numbers.map(Number));
  }
  // test code
  countEqualNumbers(randomNumberArray, userLottoNumber) {
    return randomNumberArray.filter(number => userLottoNumber.includes(number))
      .length;
  }
  // test code
  compareBonusNumber(randomNumberArray, userBonusNumber) {
    return randomNumberArray.includes(userBonusNumber);
  }
  // test code
  getLottoResult(equalNumber, bonusResult) {
    let result = [0, 0, 0, 0, 0];
    if (equalNumber === 3) result[0] += 1;
    if (equalNumber === 4) result[1] += 1;
    if (equalNumber === 5 && !bonusResult) result[2] += 1;
    if (equalNumber === 5 && bonusResult) result[3] += 1;
    if (equalNumber === 6) result[4] += 1;
    return result;
  }
  // test code
  checkBonusNumber(randomNumberArray, equalNumber, userBonusNumber) {
    if (equalNumber === CONSTANT.MATCH_FIVE) {
      return this.compareBonusNumber(randomNumberArray, userBonusNumber);
    }
  }

  compareLottoNumbers(lottoRandomNumber, userLottoNumber, userBonusNumber) {
    let lottoResult = [];
    let bonusResult = CONSTANT.ZERO;
    lottoRandomNumber.forEach(randomNumberArray => {
      const equalNumber = this.countEqualNumbers(
        randomNumberArray,
        userLottoNumber,
      );
      bonusResult = this.checkBonusNumber(
        randomNumberArray,
        equalNumber,
        userBonusNumber,
      );
      lottoResult = this.getLottoResult(equalNumber, bonusResult);
    });
    return lottoResult;
  }

  getLottoRate(lottoResult, lottoPrice) {
    const money = [5000, 50000, 1500000, 30000000, 2000000000];
    let prizeMoney = CONSTANT.ZERO;
    let investment = Number(lottoPrice);
    let rate = CONSTANT.ZERO;
    lottoResult.forEach((amount, index) => {
      if (amount) prizeMoney += amount * money[index];
    });
    rate = ((prizeMoney - investment) / investment) * 100;
    rate = 100 + Math.round(rate * 10) / 10;
    return rate;
  }
}

export default Lotto;
