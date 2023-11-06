import { ERROR } from "../constants/constants.js";

class BonusLotto {
  #bonus;

  constructor(input, winningLottos) {
    this.checkValid(input, winningLottos);
  }

  checkValid(input, winningLottos) {
    const bonusNum = parseInt(input);
    
    if (isNaN(input)) {
      throw new Error(ERROR.invalidNumber);
    }
    if (bonusNum < 0 || bonusNum > 45) {
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
