import BonusValidation from '../validation/BonusValidation.js';

class BonusNumber {
  #bonusNumber;

  /**
   * 보너스 번호 생성 및 validaion 확인
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
   * 보너스 번호를 반환합니다.
   * @returns {number} bonunNumber
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default BonusNumber;
