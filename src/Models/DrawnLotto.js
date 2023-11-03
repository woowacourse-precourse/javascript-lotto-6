import Lotto from "./Lotto.js";
import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class DrawnLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  getPlusNumber() {
    return this.#bonusNumber;
  }
}

export default DrawnLotto;
