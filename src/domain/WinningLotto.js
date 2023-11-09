import Lotto from '../Lotto.js';
import { ERROR_MESSAGE } from '../utils/Define.js';
import CustomError from '../utils/Errors.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor({ numbers, bonusNumber }) {
    super(numbers);

    this.#validates(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validates(bonusNumber) {
    this.validateOutOfRange(bonusNumber);
    if (this.includeNumber(bonusNumber)) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notUniqueBonusNumber);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
