import { LOTTO } from './constants/api';
import { ERROR_MESSAGE } from './constants/message';
import validator from './utils/validator';

class BonusNumber {
  constructor(bonusNumberInput, winningNumbers) {
    this.bonusNumber = bonusNumberInput;
    this.#validate(winningNumbers);
  }

  #validate(winningNumbers) {
    const gatheredNumbers = [this.bonusNumber, ...winningNumbers];
    if(validator.isDuplicate(gatheredNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (!validator.isPositiveInteger(this.bonusNumber)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER);
    }

    if (!validator.isNumberInRange(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE, this.bonusNumber)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE));
    }
  }
}

export default BonusNumber;
