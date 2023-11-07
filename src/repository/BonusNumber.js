import { MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../utils/constants.js';
import { checkValueIsNumber } from '../utils/checkValue.js';

class BounsNumber {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#bonusNumber = Number(bonusNumber);
    this.#validateType(bonusNumber);
    this.#validateRange(Number(bonusNumber));
  }

  #validateType(bonusNumber) {
    if (!checkValueIsNumber(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 가능합니다.');
    }
  }
  #validateRange(bonusNumber) {
    if (bonusNumber < MIN_LOTTO_NUMBER || bonusNumber > MAX_LOTTO_NUMBER) {
      throw new Error('[ERROR] 1에서 45 사이의 숫자를 입력해주세요.');
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BounsNumber;
