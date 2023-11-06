import BonusValidation from '../validation/BonusValidation.js';

class BonusNumber {
  #bonusNumber;

  /**
   *
   * @param {string} bonusNumber
   * @param {number []} lottos
   */
  constructor(bonusNumber, lottos) {
    const bonus = Number(bonusNumber);
    this.#validate(bonus, lottos);
    this.#bonusNumber = bonus;
  }

  #validate(bonusNumber, lottos) {
    BonusValidation.checkDuplicatie(bonusNumber, lottos);
    BonusValidation.checkNumber(bonusNumber);
  }

  /**
   *
   * @returns {number} bonunNumber
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
