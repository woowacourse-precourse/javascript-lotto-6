import Lotto from "./Lotto.js";
import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class DrawnLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    const convertedBonumNumber = Number(bonusNumber);
    this.#validatePlusNumber(convertedBonumNumber);
    this.#validateRangeOfPlusNumber(convertedBonumNumber);
    this.#bonusNumber = convertedBonumNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getFullNumbers() {
    const numbers = this.getNumbers();
    const bonusNumber = this.getBonusNumber();
    return { numbers, bonusNumber };
  }

  #validatePlusNumber(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber))
      throw new LottoError("중복된 숫자가 있습니다.");
  }

  #validateRangeOfPlusNumber(bonusNumber) {
    if (
      bonusNumber < LOTTO_SETTINGS.NUMBER_RANGE.MIN ||
      bonusNumber > LOTTO_SETTINGS.NUMBER_RANGE.MAX
    )
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN}이상 ${LOTTO_SETTINGS.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
  }
}

export default DrawnLotto;
