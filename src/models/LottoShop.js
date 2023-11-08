import LOTTO from '../constants/AboutLotto.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import Utils from '../utils/Utils.js';
import Validation from '../utils/Validation.js';

class LottoShop {
  #winningNumber;

  #bonusNumber;

  #result;

  constructor(winningNumber) {
    this.#validateWinningNumber(winningNumber);
    this.#winningNumber = winningNumber
      .split(',')
      .sort((x, y) => x - y)
      .map((string) => Number(string));
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #validateWinningNumber(winningNumberString) {
    const winningNumberArray = [...new Set(winningNumberString.split(','))];
    if (Validation.winningNumber(winningNumberArray)) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBER);
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (
      Validation.bonusNumber(bonusNumber) ||
      this.#winningNumber.includes(Number(bonusNumber))
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER);
    }
  }

  addResultFirstPlace(lottos) {
    lottos.forEach((lotto) => {
      if (Utils.checkingFirstPlace(lotto, this.#winningNumber))
        this.#result[0] += 1;
    });
  }

  addResultSecondPlace(lottos) {
    if (this.#bonusNumber === undefined) {
      throw new Error(ERROR_MESSAGE.GIVE_BONUS_NUMBER);
    }
    lottos.forEach((lotto) => {
      if (
        Utils.checkingSecondPlace(lotto, this.#winningNumber, this.#bonusNumber)
      )
        this.#result[1] += 1;
    });
  }

  addResultThirdPlace(lottos) {
    if (this.#bonusNumber === undefined) {
      throw new Error(ERROR_MESSAGE.GIVE_BONUS_NUMBER);
    }
    lottos.forEach((lotto) => {
      if (
        Utils.checkingThirdPlace(lotto, this.#winningNumber, this.#bonusNumber)
      )
        this.#result[2] += 1;
    });
  }

  addResultForthPlace(lottos) {
    lottos.forEach((lotto) => {
      if (Utils.checkingForthPlace(lotto, this.#winningNumber))
        this.#result[3] += 1;
    });
  }

  addResultFifthPlace(lottos) {
    lottos.forEach((lotto) => {
      if (Utils.checkingFifthPlace(lotto, this.#winningNumber))
        this.#result[4] += 1;
    });
  }

  checkingTotalResult(lottos) {
    this.#result = [0, 0, 0, 0, 0];
    this.addResultFirstPlace(lottos);
    this.addResultSecondPlace(lottos);
    this.addResultThirdPlace(lottos);
    this.addResultForthPlace(lottos);
    this.addResultFifthPlace(lottos);
    return this.#result;
  }

  returnProfitRate(money) {
    if (this.#result === undefined)
      throw new Error(ERROR_MESSAGE.CHECK_RESULT_FIRST);
    return (
      ((this.#result[0] * LOTTO.FIRST_PLACE_PRIZE_MONEY +
        this.#result[1] * LOTTO.SECOND_PLACE_PRIZE_MONEY +
        this.#result[2] * LOTTO.THIRD_PLACE_PRIZE_MONEY +
        this.#result[3] * LOTTO.FORTH_PLACE_PRIZE_MONEY +
        this.#result[4] * LOTTO.FIFTH_PLACE_PRIZE_MONEY) /
        money) *
      100
    ).toFixed(1);
  }
}

export default LottoShop;
