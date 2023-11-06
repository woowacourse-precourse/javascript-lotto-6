import LOTTO from '../constants/AboutLotto.js';
import Utils from '../utils/Utils.js';

class LottoShop {
  #winningNumber;

  #bonusNumber;

  #person;

  #result;

  constructor(winningNumber, bonusNumber) {
    this.#validateWinningNumber(winningNumber);
    this.#validateBonusNumber(bonusNumber);
    this.#winningNumber = winningNumber
      .split(',')
      .sort((x, y) => x - y)
      .map((string) => Number(string));
    this.#bonusNumber = Number(bonusNumber);
    this.#result = [0, 0, 0, 0, 0];
  }

  #validateWinningNumber(winningNumberString) {
    const winningNumberArray = [...new Set(winningNumberString.split(','))];
    if (
      winningNumberArray.length !== 6 ||
      Number.isNaN(winningNumberArray.join('')) ||
      !winningNumberArray.every(
        (number) =>
          Number(number) >= LOTTO.MIN_NUMBER &&
          Number(number) <= LOTTO.MAX_NUMBER
      )
    ) {
      throw new Error('[ERROR] 당첨번호가 잘못된 형식입니다.');
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (
      bonusNumber.length !== 1 ||
      Number.isNaN(bonusNumber) ||
      Number(bonusNumber) < LOTTO.MIN_NUMBER ||
      Number(bonusNumber) > LOTTO.MAX_NUMBER
    ) {
      throw new Error('[ERROR] 보너스번호가 잘못된 형식입니다.');
    }
  }

  addResultFirstPlace(lottos) {
    lottos.forEach((lotto) => {
      if (Utils.checkingFirstPlace(lotto, this.#winningNumber))
        this.#result[0] += 1;
    });
  }

  addResultSecondPlace(lottos) {
    lottos.forEach((lotto) => {
      if (
        Utils.checkingSecondPlace(lotto, this.#winningNumber, this.#bonusNumber)
      )
        this.#result[1] += 1;
    });
  }

  addResultThirdPlace(lottos) {
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
    this.addResultFirstPlace(lottos);
    this.addResultSecondPlace(lottos);
    this.addResultThirdPlace(lottos);
    this.addResultForthPlace(lottos);
    this.addResultFifthPlace(lottos);
    return this.#result;
  }

  returnProfitRate(money) {
    return (
      ((this.#result[0] * 200000000 +
        this.#result[1] * 30000000 +
        this.#result[2] * 1500000 +
        this.#result[3] * 50000 +
        this.#result[4] * 5000) /
        money) *
      100
    ).toFixed(1);
  }
}

export default LottoShop;
