import { ERROR } from "../constant/gameMessge.js";

class WinningRate {
  #lotto;

  #bonusNumber;

  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#bonusNumber = bonusNumber;
    this.#validate(bonusNumber);
  }

  #validate(bonusNumber) {
    if (this.#lotto.includesNumber(bonusNumber)) {
      throw new Error(ERROR.bonus.duplicate);
    }

    if (typeof bonusNumber !== "number" || Number.isNaN(bonusNumber)) {
      throw new Error(ERROR.bonus.numeric);
    }
  }

  countMatchLottoNumber(lotto) {
    const lottoNumbers = new Set(lotto.getNumbers());
    const count = this.#lotto.getNumbers().filter((number) => lottoNumbers.has(number)).length;

    return count;
  }

  isMatchBonusNumber(lotto) {
    return lotto.includesNumber(this.#bonusNumber);
  }
}

export default WinningRate;
