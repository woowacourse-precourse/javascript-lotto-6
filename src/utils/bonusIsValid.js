import { BONUS_ERROR } from "../constants/errorMessage.js";
import NUMBERS from "../constants/numbers.js";
import SYMBOLS from "../constants/symbols.js";

const { space, dot } = SYMBOLS;
const { space_error, point_error, string_error, range_error, dulicate_error } =
  BONUS_ERROR;
const { start_number, end_number } = NUMBERS;

const validateBonus = (number) => {
  if (number.includes(space)) {
    throw new Error(`${space_error}`);
  }
  if (number.includes(dot)) {
    throw new Error(`${point_error}`);
  }
  return true;
};

const validateBonusIsInteger = (number) => {
  if (!Number.isInteger(Number(number))) {
    throw new Error(`${string_error}`);
  }
  return true;
};

const validateBonusRange = (number) => {
  if (number < start_number || number > end_number) {
    throw new Error(`${range_error}`);
  }
  return true;
};

const validateBonusDuplicate = (number, winningNumbers) => {
  if (winningNumbers.includes(Number(number))) {
    throw new Error(`${dulicate_error}`);
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
