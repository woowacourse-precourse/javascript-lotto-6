import Validator from "./Validator.js";
import LOTTO from "./constant/LOTTO.js";
import PRIZE from "./constant/PRIZE.js";

class LottoPrizeManager {
  #winnningNumberArray;
  #bonusNumber;

  constructor(winningNumberArray, bonusNumber) {
    this.#validateWinningNumber(winningNumberArray);
    this.#validateBonusNumber(bonusNumber);

    this.#winnningNumberArray = winningNumberArray;
    this.#bonusNumber = bonusNumber;
  }

  #validateWinningNumber(array) {
    if (!Validator.isArrayLengthEqualTo(array, LOTTO.SIZE)) {
      throw new Error(PRIZE.ERROR.WINNING_NUMBER_SIZE);
    }

    if (!array.every((numStr) => Validator.isInLottoNumberRange(numStr))) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_RANGE_NUMBER);
    }

    if (Validator.hasDuplicate(array)) {
      throw new Error(PRIZE.ERROR.WINING_NUMBER_DUPLICATE);
    }
  }

  #validateBonusNumber(numStr) {
    if (!Validator.isInLottoNumberRange(numStr)) {
      throw new Error(PRIZE.ERROR.BONUS_NUMBER_RANGE_NUMBER);
    }
  }
}

export default LottoPrizeManager;
