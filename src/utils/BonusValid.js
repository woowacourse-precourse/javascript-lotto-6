import { BONUS_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";

class BonusValid {
  bonusIsValid(number, winningNumbers) {
    if (number.includes(SYMBOLS.space)) {
      throw new Error(`${BONUS_ERROR.space_error}`);
    }
    if (winningNumbers.includes(Number(number))) {
      throw new Error(`${BONUS_ERROR.dulicate_error}`);
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error(`${BONUS_ERROR.string_error}`);
    }
    if (number.includes(SYMBOLS.dot)) {
      throw new Error(`${BONUS_ERROR.point_error}`);
    }
    if (number < NUMBERS.start_number || number > NUMBERS.end_number) {
      throw new Error(`${BONUS_ERROR.range_error}`);
    }
    return true;
  }
}

export default BonusValid;
