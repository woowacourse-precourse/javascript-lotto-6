import {
  TYPE_ERROR,
  RANGE_ERROR,
  MIN_NUMBER,
  MAX_NUMBER,
} from "../constants.js";

export const validateBonusNumber = (input) => {
  if (isNaN(+input)) {
    throw new Error(TYPE_ERROR);
  } else if (input < MIN_NUMBER || input > MAX_NUMBER) {
    throw new Error(RANGE_ERROR);
  }
};
