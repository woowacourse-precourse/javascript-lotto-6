/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import CONSTANTS from '../../../Util/Constants.js';
import { ERROR_MESSAGE } from '../../../Util/Message.js';

class Bonus {
  #bonus;

  constructor(bonusLotto) {
    this.#validate(bonusLotto);
    this.#bonus = Number(bonusLotto);
  }

  #validate(bonusLotto) {
    if (bonusLotto === '') throw new Error(ERROR_MESSAGE.isBlank);
    if (Number.isNaN(Number(bonusLotto))) throw new Error(ERROR_MESSAGE.isChar);
    if (CONSTANTS.lottoMin > Number(bonusLotto) || Number(bonusLotto) > CONSTANTS.lottoMax)
      throw new Error(ERROR_MESSAGE.isNotInRange);
  }

  get bonus() {
    return this.#bonus;
  }
  // TODO: 추가 기능 구현
}

export default Bonus;
