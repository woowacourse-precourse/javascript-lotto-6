import { validateBonusNumber } from "../utils/Validate.js";

class WinningNumbers {
  #lotto;
  #bonusNumber;

  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#bonusNumber = bonusNumber;
    this.#validate(lotto, bonusNumber);
  }

  #validate(lotto, bonusNumber) {
    validateBonusNumber(lotto, bonusNumber);
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

export default WinningNumbers;
