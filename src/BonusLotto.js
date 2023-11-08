import { ERRORMESSAGES } from "./util/Message";
class BonusLotto {
  #bonusNumbers;

  constructor(numbers, bonusNumbers) {
    this.#validate(numbers, bonusNumbers);
    this.#bonusNumbers = bonusNumbers;
  }

  #validate(numbers, bonusNumbers) {
    if (Number.isNaN(Number(bonusNumbers))) {
      throw new Error(ERRORMESSAGES.NOT_A_NUMBER);
    }
    if (numbers.some((number) => number === bonusNumbers)) {
      throw new Error(ERRORMESSAGES.BONUS_DUPLICATE);
    }
    if (bonusNumbers < 1 || bonusNumbers > 45) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_RANGE);
    }

    return true;
  }
  get getBonusNumbers() {
    return this.#bonusNumbers;
  }
}

export default BonusLotto;
