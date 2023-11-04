import LottoGameError from "../Error";
import { LOTTO_ERROR_MSG } from "../constants/error";
import { LOTTO_CONSTANT } from "../constants/game";
import Lotto from "./Lotto";

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.validateDigitNumber(bonusNumber);
    this.validateRange(bonusNumber);
    this.#validateDuplication(bonusNumber);
  }

  #validateDuplication(num) {
    if (this.lottoNumbers.includes(num)) {
      throw new LottoGameError(LOTTO_ERROR_MSG.DUPLICATION_ERR);
    }
  }
}
