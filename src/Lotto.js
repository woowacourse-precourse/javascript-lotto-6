import { ERROR_MESSAGE } from './message';
import { CONSTANT } from './constant';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length === CONSTANT.ZERO) throw new Error(ERROR_MESSAGE.LOTTO_EMPTY);
    if (numbers.length !== CONSTANT.NUMBER_MAX_LENGTH) throw new Error(ERROR_MESSAGE.SIX_NUMBERS);
    if (this.checkRange(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
    const numbersSet = this.getNumbersSet(numbers);
    if ([...numbersSet].length !== CONSTANT.NUMBER_MAX_LENGTH) throw new Error(ERROR_MESSAGE.SAME_NUMBERS);
  }

  checkRange(numbers) {
    return numbers.filter(value => CONSTANT.NUMBER_MIN_RANGE > value || value > CONSTANT.NUMBER_MAX_RANGE).length;
  }

  getNumbersSet(numbers) {
    return new Set(numbers.map(Number));
  }

  countEqualNumbers(randomNumberArray, userLottoNumber) {
    return randomNumberArray.filter(number => userLottoNumber.includes(number))
      .length;
  }

  compareBonusNumber(randomNumberArray, userBonusNumber) {
    return randomNumberArray.includes(userBonusNumber);
  }

  getLottoResult(equalNumber, bonusResult) {
    let result = [0, 0, 0, 0, 0];
    if (equalNumber === CONSTANT.MATCH_THREE) result[0] += CONSTANT.ONE;
    if (equalNumber === CONSTANT.MATCH_FOUR) result[1] += CONSTANT.ONE;
    if (equalNumber === CONSTANT.MATCH_FIVE && !bonusResult) result[2] += CONSTANT.ONE;
    if (equalNumber === CONSTANT.MATCH_FIVE && bonusResult) result[3] += CONSTANT.ONE;
    if (equalNumber === CONSTANT.MATCH_SIX) result[4] += CONSTANT.ONE;
    return result;
  }

  checkBonusNumber(randomNumberArray, equalNumber, userBonusNumber) {
    if (equalNumber === CONSTANT.MATCH_FIVE) {
      return this.compareBonusNumber(randomNumberArray, userBonusNumber);
    }
  }

  compareLottoNumbers(lottoRandomNumber, userLottoNumber, userBonusNumber) {
    let lottoResult = [];
    let bonusResult = CONSTANT.ZERO;
    lottoRandomNumber.forEach(randomNumberArray => {
      const equalNumber = this.countEqualNumbers(randomNumberArray,userLottoNumber);
      bonusResult = this.checkBonusNumber(randomNumberArray,equalNumber,userBonusNumber);
      lottoResult = this.getLottoResult(equalNumber, bonusResult);
    });
    return lottoResult;
  }
  sumPrizeMoney(amount, index, money){
    let priceMoney =0;
    if (amount) {
      priceMoney += (amount * money[index]);
    }
    return priceMoney;
  }

  getLottoRate(lottoResult, lottoPrice) {
    const money = [5000, 50000, 1500000, 30000000, 2000000000];
    let prizeMoney = CONSTANT.ZERO;
    let investment = Number(lottoPrice);
    let rate = CONSTANT.ZERO;
    lottoResult.forEach((amount, index) => {
      prizeMoney += this.sumPrizeMoney(amount, index, money);
    });
    rate = ((prizeMoney - investment) / investment) * 100;
    rate = 100 + Math.round(rate * 10) / 10;
    return rate;
  }
}

export default Lotto;
