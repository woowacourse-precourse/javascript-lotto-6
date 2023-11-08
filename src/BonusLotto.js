import { ERRORMESSAGES } from "./util/Message";
import { LOTTO_CONSTANTS } from "./util/constants";
const { MIN, MAX } = LOTTO_CONSTANTS;
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
    if (bonusNumbers < MIN || bonusNumbers > MAX) {
      throw new Error(ERRORMESSAGES.LOTTO_NUMBER_RANGE);
    }

    return true;
  }

  get getBonusNumbers() {
    return this.#bonusNumbers;
  }
}

export default BonusLotto;
