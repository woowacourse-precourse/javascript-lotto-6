import LOTTO from '../constants/AboutLotto.js';
import Utils from '../utils/Utils.js';

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
    if (
      winningNumberArray.length !== 6 ||
      isNaN(winningNumberArray.join('')) ||
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
      /\s/g.test(bonusNumber) ||
      isNaN(bonusNumber) ||
      Number(bonusNumber) < LOTTO.MIN_NUMBER ||
      Number(bonusNumber) > LOTTO.MAX_NUMBER ||
      this.#winningNumber.includes(Number(bonusNumber))
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
    if (this.#bonusNumber === undefined) {
      throw new Error('[ERROR] 보너스 번호를 입력해주세요');
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
      throw new Error('[ERROR] 보너스 번호를 입력해주세요');
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
      throw new Error('[ERROR] 결과를 먼저 확인해주세요');
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
