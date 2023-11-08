import CustomError from '../CustomError.js';
import { ERROR, LOTTO } from '../Constant.js';
import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonus;

  constructor(winningNumbers, bonus) {
    super(winningNumbers);
    this.#validate(winningNumbers, bonus);
    this.#bonus = bonus;
  }

  getBonusNumber() {
    return this.#bonus;
  }

  #validate(winningNumbers, bonus) {
    const REGEX_NUMERIC = /^\d+$/;

    if (!REGEX_NUMERIC.test(bonus)) {
      throw new CustomError(ERROR.BONUS_NOT_A_NUMBER);
    }

    if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
      throw new CustomError(ERROR.BONUS_NOT_IN_RANGE);
    }

    if (winningNumbers.indexOf(bonus) !== -1) {
      throw new CustomError(ERROR.BONUS_ALREADY_IN_LOTTO);
    }
  }

  countMatchingNumbers(lotto) {
    const matchCnt = this._numbers.reduce(
      (sum, num) => (lotto.contain(num) ? sum + 1 : sum),
      0
    );
    return matchCnt;
  }
}

export default WinningLotto;
