import Validator from './Validator.js';
import { FIVE_COUNT, FOUR_COUNT, INCREMENT, INITIAL_VALUE, SIX_COUNT, THREE_COUNT } from './constants/constants.js';

class Lotto {
  #lottoNumbers;
  #result = {
    fifthPlaceWin: INITIAL_VALUE,
    fourthPlaceWin: INITIAL_VALUE,
    thirdPlaceWin: INITIAL_VALUE,
    secondPlaceWin: INITIAL_VALUE,
    firstPlaceWin: INITIAL_VALUE,
  };

  constructor(numbers) {
    this.#validate(numbers);
    this.#lottoNumbers = numbers;
  }

  #validate(numbers) {
    try {
      Validator.validateLottoNumbers(numbers);
    } catch (error) {
      throw new Error(error);
    }
  }

  checkLotto(drawnLotto) {
    const matchingNumbers = this.#lottoNumbers.filter(
      (number) => drawnLotto.numbers.includes(number.toString())
    );
    const bonusMatch = this.#lottoNumbers.includes(Number(drawnLotto.bonusNumber));
    const matchCount = matchingNumbers.length;

    if (matchCount === THREE_COUNT) {
      this.#result.fifthPlaceWin += INCREMENT;
    }

    if (matchCount === FOUR_COUNT) {
      this.#result.fourthPlaceWin += INCREMENT;
    }

    if (matchCount === FIVE_COUNT) {
      bonusMatch
        ? (this.#result.secondPlaceWin += INCREMENT)
        : (this.#result.thirdPlaceWin += INCREMENT);
    }

    if (matchCount === SIX_COUNT) {
      this.#result.firstPlaceWin += INCREMENT;
    }

    return this.#result;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  getResult() {
    return this.#result;
  }

  toString() {
    return JSON.stringify(this.#lottoNumbers).replace(/,/g, ', ');
  }
}

export default Lotto;