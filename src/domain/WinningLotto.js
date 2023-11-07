import Lotto from '../Lotto';
import { ERROR_MESSAGE } from '../utils/Define';
import CustomError from '../utils/Errors';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor({ numbers, bonusNumber }) {
    super(numbers);

    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    this.validateOutOfRange(bonusNumber);
    if (this.includeNumber(bonusNumber)) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notUniqueNumbers);
    }
  }
}

export default WinningLotto;
