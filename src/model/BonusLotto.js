import { ERROR, SIGN, VALUE } from "../constants/constants.js";

class BonusLotto {
  #bonus;

  constructor(input, winningLottos) {
    this.#validate(input, winningLottos);
  }

  #validate(input, winningLottos) {
    const bonusNum = parseInt(input);
    
    if (isNaN(input)) {
      throw new Error(ERROR.invalidNumber);
    }
    if (input === SIGN.blank) {
      throw new Error(ERROR.invalidNumber);
    }
    if (bonusNum < VALUE.minLottoNumber || bonusNum > VALUE.maxLottoNumber) {
      throw new Error(ERROR.invalidRange);
    }
    if (winningLottos.includes(bonusNum)) {
      throw new Error(ERROR.duplicatedWithWinning);
    }
  }

  getBonusNum() {
    return this.#bonus;
  }
}

export default BonusLotto;
