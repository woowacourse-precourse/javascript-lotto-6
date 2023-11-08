import Messages from '../utils/Messages.js';
import Constants from '../utils/Constants.js';
import Lotto from './Lotto.js';

class BonusLotto {
  #number;

  constructor(number, lottoNumbers) {
    this.#validate(number, lottoNumbers);
    this.#number = number;
  }

  async setNumber(number) {
    this.#validate(number);
    this.#number = number;
  }

  async getNumber() {
    return this.#number;
  }

  #validate(bonusNumber, lottoNumbers) {
    const messages = new Messages();
    if (this.#checkArange(bonusNumber)) {
      throw new Error(messages.getErrorMsg('outOfindex'));
    }

    if (typeof bonusNumber !== 'number' || isNaN(bonusNumber)) {
      throw new Error(messages.getErrorMsg('notNumber'));
    }

    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(messages.getErrorMsg('overlap'));
    }
  }

  #checkArange(number) {
    const constants = new Constants();
    if (
      number < constants.getLottoNumberMin() ||
      number > constants.getLottoNumberMax()
    ) {
      return true;
    }
    return false;
  }
}

// const bonusLotto = new BonusLotto(7, [1, 2, 3, 4, 5, 6]);
// console.log(await bonusLotto.getNumber());

export default BonusLotto;
