import Lotto from "./Lotto.js";
import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class DrawnLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validatePlusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getPlusNumber() {
    return this.#bonusNumber;
  }

  #validatePlusNumber(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber))
      throw new LottoError("중복된 숫자가 있습니다.");
  }
}

export default DrawnLotto;
