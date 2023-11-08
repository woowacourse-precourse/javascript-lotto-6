import { ERROR_MESSAGES } from "../../constants/Messages.js";

export function validateWinningNumberSix(WINNING_NUMBER_ARRAY) {
  if (WINNING_NUMBER_ARRAY.length !== 6) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER_NOT_SIX);
  }
}
export function validateWinningNumberDuplication(WINNING_NUMBER_ARRAY) {
  const UNIQUE_ARRAY = [...new Set(WINNING_NUMBER_ARRAY)];
  if (WINNING_NUMBER_ARRAY.length !== UNIQUE_ARRAY.length) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATION);
  }
}

export function validateWinningNumberOutOfBounds(WINNING_NUMBER_ARRAY) {
  if (!WINNING_NUMBER_ARRAY.every((number) => number >= 1 && number <= 45)) {
    throw new Error(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_BOUNDS);
  }
}

export function validateWinningNumberCollection(WINNING_NUMBER_ARRAY) {
  validateWinningNumberSix(WINNING_NUMBER_ARRAY);
  validateWinningNumberOutOfBounds(WINNING_NUMBER_ARRAY);
  validateWinningNumberDuplication(WINNING_NUMBER_ARRAY);
}
