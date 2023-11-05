import BonusValidation from '../validation/BonusValidation.js';

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, lottos) {
    this.#validate(bonusNumber, lottos);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber, lottos) {
    BonusValidation.checkDuplicatie(bonusNumber, lottos.getLottos());
    BonusValidation.checkNumber(bonusNumber);
  }

  getBonusNumber() {
    return this.getBonusNumber;
  }
}

export default BonusNumber;
