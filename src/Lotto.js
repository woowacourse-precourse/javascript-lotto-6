import Validator from './Validator.js';
import { FIVE_COUNT, FOUR_COUNT, INCREMENT, INITIAL_VALUE, SIX_COUNT, THREE_COUNT } from './constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      Validator.validateLottoNumbers(numbers);
    } catch (error) {
      throw new Error(error);
    }
  }

  checkLotto(drawnLotto) {
    const result = {
      fifthPlaceWin: INITIAL_VALUE,
      fourthPlaceWin: INITIAL_VALUE,
      thirdPlaceWin: INITIAL_VALUE,
      secondPlaceWin: INITIAL_VALUE,
      firstPlaceWin: INITIAL_VALUE,
    };
    const matchCount = this.checkMatchCount(drawnLotto);
    const bonusMatch = this.checkMatchingBonus(drawnLotto);

    if (matchCount === THREE_COUNT) {
      result.fifthPlaceWin += INCREMENT;
    }

    if (matchCount === FOUR_COUNT) {
      result.fourthPlaceWin += INCREMENT;
    }

    if (matchCount === FIVE_COUNT) {
      bonusMatch
        ? (result.secondPlaceWin += INCREMENT)
        : (result.thirdPlaceWin += INCREMENT);
    }

    if (matchCount === SIX_COUNT) {
      result.firstPlaceWin += INCREMENT;
    }

    return result;
  }

  checkMatchCount(drawnLotto) {
    return this.#numbers.filter(
      (number) => drawnLotto.numbers.includes(number.toString())
    ).length;
  }

  checkMatchingBonus(drawnLotto) {
    return this.#numbers.includes(Number(drawnLotto.bonusNumber));
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  toString() {
    return JSON.stringify(this.#numbers).replace(/,/g, ', ');
  }
}

export default Lotto;