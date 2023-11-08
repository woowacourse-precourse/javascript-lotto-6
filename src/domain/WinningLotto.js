import { errorMessage } from '../constants/messages';
import Lotto from '../Lotto';
import Validation from '../validations/Validation';

class WinningLotto extends Lotto {
  bonus;

  getBonus(number) {
    this.#validateBonus(number);
    this.bonus = number;
  }

  #validateBonus(number) {
    if (Validation.checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validation.checkBonusDuplicates(this.getLottoNumbers(), number)) {
      throw new Error(errorMessage.BONUS_DUPLICATES);
    }
  }
}

export default WinningLotto;
