import validation from '../validation/validation.js';
import { ERROR_MSG } from '../constants/messages.js';
import { CORRECT, PLACE, PRIZE, LOTTO } from '../constants/numbers.js';

class Winners {
  #winnerNumbers;

  #bonusNumber;

  #prize;

  #returns;

  constructor() {
    this.#prize = new Array(LOTTO.PLACE_COUNT).fill(0);
  }

  setWinnerNumbers(number) {
    const numberArr = number.split(',').map((num) => num.trim());
    Winners.validateWinnerNumbers(numberArr);
    this.#winnerNumbers = numberArr.map((num) => parseInt(num, 10));
  }

  static validateWinnerNumbers(number) {
    if (!validation.isInRange(number))
      throw new Error(ERROR_MSG.DUPLICATED_WINNER_NUMBER);
    if (!validation.isNumber(number.join('')))
      throw new Error(ERROR_MSG.INVALID_WINNER_NUMBERS);
    if (!validation.isLengthSix(number))
      throw new Error(ERROR_MSG.INVALID_WINNER_NUMBERS_COUNT);
    if (validation.isDuplicated(number))
      throw new Error(ERROR_MSG.DUPLICATED_WINNER_NUMBER);
  }

  setBonusNumber(number) {
    this.validateBonusNumber(number);
    this.#bonusNumber = parseInt(number, 10);
  }

  validateBonusNumber(number) {
    if (!validation.isNumber(number))
      throw new Error(ERROR_MSG.INVALID_BONUS_NUMBER);
    if (!validation.isValidNumber(number))
      throw new Error(ERROR_MSG.INVALID_BONUS_NUMBER);
    if (validation.isBonusDuplicated(this.#winnerNumbers, parseInt(number, 10)))
      throw new Error(ERROR_MSG.DUPLICATED_BONUS_NUMBER);
  }

  countCorrect(lotto) {
    let count = 0;

    for (let i = 0; i < lotto.length; i += 1) {
      if (this.#winnerNumbers.includes(lotto[i])) count += 1;
    }
    return count;
  }

  addPrize(correct, bonus) {
    switch (correct) {
      case CORRECT.THREE:
        this.#prize[PLACE.FIFTH] += 1;
        return;
      case CORRECT.FOUR:
        this.#prize[PLACE.FOURTH] += 1;
        return;
      case CORRECT.FIVE:
        bonus ? (this.#prize[PLACE.SECOND] += 1) : this.#prize[PLACE.THIRD];
        return;
      case CORRECT.SIX:
        this.#prize[PLACE.FIRST] += 1;
        return;
    }
  }

  isBonusRight(lotto) {
    if (lotto.includes(this.#bonusNumber)) return true;
    return false;
  }

  countPrize(lottos) {
    for (let i = 0; i < lottos.length; i += 1) {
      const correct = this.countCorrect(lottos[i].getLottoNumbers());
      this.addPrize(correct, this.isBonusRight(lottos[i].getLottoNumbers()));
    }
    console.log(this.#prize);
  }

  calculateRateOfReturns(money) {
    const totalPrize = this.calculateTotalPrize();
    this.#returns = Math.round((totalPrize / money) * 100) / 100;
  }

  calculateTotalPrize() {
    let total = 0;
    total += this.#prize[PLACE.FIRST] * PRIZE.FIRST;
    total += this.#prize[PLACE.SECOND] * PRIZE.SECOND;
    total += this.#prize[PLACE.THIRD] * PRIZE.THIRD;
    total += this.#prize[PLACE.FOURTH] * PRIZE.FOURTH;
    total += this.#prize[PLACE.FIFTH] * PRIZE.FIFTH;
    return total;
  }

  getPrize() {
    return this.#prize;
  }

  getRateOfReturns() {
    return this.#returns;
  }
}

export default Winners;
