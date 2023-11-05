import InputError from "./InputError.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    if (isNaN(bonusNumber)) throw new InputError("숫자를 입력해야 합니다.");
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new InputError("1에서 45 사이의 수를 입력해야 합니다.");
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
