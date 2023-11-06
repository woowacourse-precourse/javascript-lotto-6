import ValidationUtils from '../utils/ValidationUtils.js';

const { checkIsInRange, checkIsNumber } = ValidationUtils;

class BonusNumber {
  #number;

  constructor(number) {
    this.#validateBonusNumber(number);
    this.#number = number;
  }

  #validateBonusNumber(number) {
    const bonusNumberIsNumber = checkIsNumber(number);
    if (!bonusNumberIsNumber) throw new Error('[ERROR] 숫자를 입력해주세요.');

    const bonusNumberIsInRange = checkIsInRange(number, 45, 1);
    if (!bonusNumberIsInRange)
      throw new Error('[ERROR]1 ~ 45 범위의 숫자를 입력해 주세요.');
  }

  getBonusNumber() {
    return Number(this.#number);
  }
}

export default BonusNumber;
