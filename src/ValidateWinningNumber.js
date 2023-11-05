import {
  TYPE_ERROR,
  RANGE_ERROR,
  DUPLICATE_ERROR,
  LOTTO_LENGTH_ERROR,
  MIN_NUMBER,
  MAX_NUMBER,
  LOTTO_LENGTH,
} from "./constants.js";

export const validateWinningNumber = (input) => {
  // 쉼표로 구분되지 않은 경우, 하나의 번호라도 숫자가 아닌 경우, 하나의 번호라도 1~45에 포함되지 않는 경우, 번호가 중복되는 경우, 번호가 6개가 아닌 경우
  const WINNING_NUMBER_LIST = input.split(",");

  if (!WINNING_NUMBER_LIST) {
    throw new Error(TYPE_ERROR);
  } else if (WINNING_NUMBER_LIST.filter((num) => isNaN(num)).length > 0) {
    throw new Error(TYPE_ERROR);
  } else if (
    WINNING_NUMBER_LIST.filter((num) => num < MIN_NUMBER || num > MAX_NUMBER)
      .length > 0
  ) {
    throw new Error(RANGE_ERROR);
  } else if (new Set(WINNING_NUMBER_LIST).size !== WINNING_NUMBER_LIST.length) {
    throw new Error(DUPLICATE_ERROR);
  } else if (WINNING_NUMBER_LIST.length !== LOTTO_LENGTH) {
    throw new Error(LOTTO_LENGTH_ERROR);
  }

  return true;
};
