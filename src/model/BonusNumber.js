import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "../constant/Constant";
import errorMessage from "../constant/ErrorMessage";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, numbers) {
    this.#validate(bonusNumber, numbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, numbers) {
    if (Number.isNaN(bonusNumber)) {
      errorMessage.typeError();
    }
    if (+bonusNumber < LOTTO_MIN_NUMBER || +bonusNumber > LOTTO_MAX_NUMBER) {
      errorMessage.numberRangeError();
    }
    if (numbers.includes(bonusNumber)) {
      errorMessage.duplicateError();
    }
  }

  convertNumber() {
    return +this.#bonusNumber;
  }
}

export default BonusNumber;
