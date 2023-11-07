import LottoGameError from "../Error.js";
import { LOTTO_ERROR_MSG } from "../constants/error.js";
import Lotto from "./Lotto.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
  }

  setBonusNumber(bonusNumber) {
    this.validateRange(bonusNumber);
    this.#validateDuplication(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateDuplication(num) {
    if (this.lottoNumbers.includes(num)) {
      throw new LottoGameError(LOTTO_ERROR_MSG.DUPLICATION_ERR);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
