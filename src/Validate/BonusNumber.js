import { ERROR_MESSAGES } from "../constants/Messages.js";

function validateBonusNumberOutOfBounds(BOUNUS_NUMBER) {
  if (BOUNUS_NUMBER < 1 || BOUNUS_NUMBER > 45) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_BOUNDS);
  }
}

function validateBonusNumberDuplicatedWithWinningNumber(
  VERIFIED_WINNING_NUMBER,
  BOUNUS_NUMBER
) {
  if (VERIFIED_WINNING_NUMBER.includes(+BOUNUS_NUMBER)) {
    throw new Error(
      ERROR_MESSAGES.BONUS_NUMBER_DUPLICATION_WITH_WINNING_NUMBER
    );
  }
}

function validateBonusNumberInteger(BOUNUS_NUMBER) {
  if (!Number.isInteger(+BOUNUS_NUMBER)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_NOT_INTEGER);
  }
}

export function validateBonusNumberCollection(
  BOUNUS_NUMBER,
  VERIFIED_WINNING_NUMBER
) {
  validateBonusNumberOutOfBounds(BOUNUS_NUMBER);
  validateBonusNumberDuplicatedWithWinningNumber(
    VERIFIED_WINNING_NUMBER,
    BOUNUS_NUMBER
  );
  validateBonusNumberInteger(BOUNUS_NUMBER);
}
