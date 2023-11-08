import InputError from "./InputError.js";
import { MIN_NUM, MAX_NUM } from "./constant/const.js";

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumber) {
    this.#validate(bonusNumber, winningNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, winningNumber) {
    if (isNaN(bonusNumber)) throw new InputError("숫자를 입력해야 합니다.");
    if (bonusNumber < MIN_NUM || bonusNumber > MAX_NUM)
      throw new InputError("1에서 45 사이의 수를 입력해야 합니다.");
    if (winningNumber.includes(bonusNumber))
      throw new InputError("당첨 번호와 중복되면 안됩니다.");
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
