import { ERROR_BONUS_INVALID, ERROR_PRIZE_INCLUDES_BONUS } from "./constants";

class GetBonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#bonusNumberValidateForm(bonusNumber);
    this.#bonusNumberValidateDuplicate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #bonusNumberValidateForm(bonusNumber) {
    const regexNumber = /^(?:[1-9]|[1-3]\d|4[0-5])$/;
    if (!regexNumber.test(bonusNumber)) {
      throw new Error(ERROR_BONUS_INVALID);
    }
  }

  #bonusNumberValidateDuplicate(winningNumber, bonusNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(ERROR_PRIZE_INCLUDES_BONUS);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default GetBonusNumber;
