import { ERROR_MESSAGES } from "../../constants/Messages.js";

export function validateBonusNumberOutOfBounds(BOUNUS_NUMBER) {
  if (BOUNUS_NUMBER < 1 || BOUNUS_NUMBER > 45) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_BOUNDS);
  }
}

export function validateBonusNumberDuplicatedWithWinningNumber(
  VERIFIED_WINNING_NUMBER,
  BOUNUS_NUMBER
) {
  if (VERIFIED_WINNING_NUMBER.includes(+BOUNUS_NUMBER)) {
    throw new Error(
      ERROR_MESSAGES.BONUS_NUMBER_DUPLICATION_WITH_WINNING_NUMBER
    );
  }
}

export function validateBonusNumberInteger(BOUNUS_NUMBER) {
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
