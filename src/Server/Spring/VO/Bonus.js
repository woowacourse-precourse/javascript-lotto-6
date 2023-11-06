import CONSTANTS from '../../../Util/Constants.js';
import { ERROR_MESSAGE } from '../../../Util/Message.js';

class Bonus {
  #bonus;

  constructor(bonusLotto, winningLotto) {
    this.#validate(bonusLotto, winningLotto);
    this.#bonus = Number(bonusLotto);
  }

  #validate(bonusLotto, winningLotto) {
    if (bonusLotto === '') throw ERROR_MESSAGE.isBlank;
    if (Number.isNaN(Number(bonusLotto))) throw ERROR_MESSAGE.isChar;
    if (winningLotto.includes(Number(bonusLotto))) throw ERROR_MESSAGE.isDuplicate;
    if (CONSTANTS.lottoMin > Number(bonusLotto) || Number(bonusLotto) > CONSTANTS.lottoMax)
      throw ERROR_MESSAGE.isNotInRange;
  }

  get bonus() {
    return this.#bonus;
  }
  // TODO: 추가 기능 구현
}

export default Bonus;
