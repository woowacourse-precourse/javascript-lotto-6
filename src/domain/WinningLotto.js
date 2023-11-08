import Lotto from '../Lotto';
import { ERROR_MESSAGE } from '../utils/Define';
import CustomError from '../utils/Errors';

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

  getBonusNumber(){
    return this.#bonusNumber;
  }

}

export default WinningLotto;
