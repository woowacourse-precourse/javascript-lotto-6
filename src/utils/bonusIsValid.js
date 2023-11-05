import { BONUS_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";

const validateBonus = (number) => {
  if (number.includes(SYMBOLS.space)) {
    throw new Error(`${BONUS_ERROR.space_error}`);
  }
  if (number.includes(SYMBOLS.dot)) {
    throw new Error(`${BONUS_ERROR.point_error}`);
  }
  return true;
};

const validateBonusIsInteger = (number) => {
  if (!Number.isInteger(Number(number))) {
    throw new Error(`${BONUS_ERROR.string_error}`);
  }
  return true;
};

const validateBonusRange = (number) => {
  if (number < NUMBERS.start_number || number > NUMBERS.end_number) {
    throw new Error(`${BONUS_ERROR.range_error}`);
  }
  return true;
};

const validateBonusDuplicate = (number, winningNumbers) => {
  if (winningNumbers.includes(Number(number))) {
    throw new Error(`${BONUS_ERROR.dulicate_error}`);
  }
  return true;
};

const bonusIsValid = (number, winningNumbers) => {
  validateBonus(number);
  validateBonusIsInteger(number);
  validateBonusRange(number);
  validateBonusDuplicate(number, winningNumbers);
  return true;
};

export default bonusIsValid;
