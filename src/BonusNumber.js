import validator from "./utils/validator";
import { ERROR_MESSAGE } from "../src/constants/message"
import { LOTTO } from "./constants/api";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = bonusNumber;
    this.#validate(winningNumbers);
  }

  #validate(winningNumbers) {
    const gatheredNumbers = [...winningNumbers, this.#bonusNumber];
    if(validator.isDuplicate(gatheredNumbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (!validator.isPositiveInteger(this.#bonusNumber)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER);
    }

    if (!validator.isNumberInRange(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE, this.#bonusNumber)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE));
    }
  }

  getNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
