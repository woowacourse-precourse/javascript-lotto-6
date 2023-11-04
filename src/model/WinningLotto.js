import LottoGameError from "../Error";
import { LOTTO_ERROR_MSG } from "../constants/error";
import Lotto from "./Lotto";

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
}

export default WinningLotto;
