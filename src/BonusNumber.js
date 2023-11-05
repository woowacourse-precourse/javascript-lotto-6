import InputError from "./InputError.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumber) {
    this.#validate(bonusNumber, winningNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, winningNumber) {
    if (isNaN(bonusNumber)) throw new InputError("숫자를 입력해야 합니다.");
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new InputError("1에서 45 사이의 수를 입력해야 합니다.");
    console.log(bonusNumber, winningNumber);
    if (winningNumber.includes(bonusNumber))
      throw new InputError("당첨 번호와 중복되면 안됩니다.");
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
