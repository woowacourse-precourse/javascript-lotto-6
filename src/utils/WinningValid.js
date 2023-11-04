import { WINNING_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";

class WinningValid {
  winningIsValid(numbers, integer, outOfRange) {
    if (numbers.length !== NUMBERS.piece) {
      throw new Error(`${WINNING_ERROR.length_error}`);
    }
    if (outOfRange.length !== NUMBERS.zero) {
      throw new Error(`${WINNING_ERROR.range_error}`);
    }
    if (integer.length !== numbers.length) {
      throw new Error(`${WINNING_ERROR.string_error}`);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(`${WINNING_ERROR.dulicate_error}`);
    }
    return true;
  }
}

export default WinningValid;
