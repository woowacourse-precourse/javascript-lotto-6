import Validator from '../validators/Validator.js';

class Bonus {
  #bonusNumber;

  #winningNumbers;

  /**
   * 입력받은 당첨 번호와 보너스 번호
   * @param {string} bonusNumber
   * @param {number[]} winningNumbers
   */
  constructor(bonusNumber, winningNumbers) {
    this.#bonusNumber = Number(bonusNumber);
    this.#winningNumbers = winningNumbers;
    this.#validate();
  }

  #validate() {
    Validator.validateBonusNumber(this.#bonusNumber, this.#winningNumbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
