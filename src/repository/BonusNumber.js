import { checkValueIsNumber } from '../utils/getUserInput.js';

class BounsNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#bonusNumber = bonusNumber;
    this.#validateType(bonusNumber);
    this.#validateRange(bonusNumber);
  }

  #validateType(bonusNumber) {
    if (!checkValueIsNumber(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 가능합니다.');
    }
  }
  #validateRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 1에서 45 사이의 숫자를 입력해주세요.');
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BounsNumber;
