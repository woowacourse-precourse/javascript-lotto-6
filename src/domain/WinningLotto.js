import { errorMessage } from "../constants/messages.js";

import Lotto from "./Lotto.js";
import Validator from "../validators/Validator.js";

class WinningLotto extends Lotto {
  bonus;

  getBonus(number) {
    this.#validateBonus(number);
    this.bonus = number;
  }

  #validateBonus(number) {
    if (Validator.checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validator.checkBonusDuplicates(this.getLottoNumbers(), number)) {
      throw new Error(errorMessage.BONUS_DUPLICATES);
    }
  }
}

export default WinningLotto;
