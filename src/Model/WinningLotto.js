import Lotto from '../Lotto.js';
import { throwError, Conditions } from '../util/Validator.js';
import ERROR from '../constants/Error.js';

const { BONUS_NUMBER, BONUS_RANGE, BONUS_DUPLICATE } = ERROR;
const { isPositiveInteger, isInRange } = Conditions;

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor({ numbers, bonusNumber }) {
    super(numbers);
    this.#validate(numbers, bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  #validate(numbers, bonusNumber) {
    this.#validatePositiveInteger(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateDuplicate(numbers, bonusNumber);
  }

  #validatePositiveInteger(number) {
    throwError(BONUS_NUMBER, isPositiveInteger(number));
  }

  #validateRange(number) {
    throwError(BONUS_RANGE, isInRange(number));
  }

  #validateDuplicate(numbers, bonusNumber) {
    throwError(BONUS_DUPLICATE, !numbers.includes(bonusNumber));
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
