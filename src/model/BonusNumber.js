import Validator from '../validator/Validator.js';

class BonusNumber {
  #number;

  constructor(number, winningLottoNumbers) {
    this.#validateBonusNumber(number, winningLottoNumbers);
    this.#number = Number(number);
  }

  #validateBonusNumber(number, winningLottoNumbers) {
    Validator.checkIsNotNumber(number);
    Validator.checkIsNotPositive(number);
    Validator.checkIsOutOfRange(number);
    Validator.checkHasDuplicate([Number(number), ...winningLottoNumbers]);
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusNumber;
