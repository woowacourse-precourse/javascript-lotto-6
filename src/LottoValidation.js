import SETTING from "./Constructor/Setting";
import ERROR_MESSAGE from "./Constructor/ErrorMessage";
import { IsNumbersInArray, IsNumberInRangeOfArray } from "./Utils";

export const validateLottoNumbersCountMismatch = (numbers) => {
  if (numbers.length !== SETTING.LOTTO_NUMBER_COUNT) {
    throw new Error(ERROR_MESSAGE.LOTTO.NUMBERS_COUNT_MISMATCH);
  }
};

export const validateLottoNumbersNotAllNumbers = (numbers) => {
  if (IsNumbersInArray(numbers)) {
    throw new Error(ERROR_MESSAGE.LOTTO.NUMBERS_NOT_ALL_NUMBERS(numbers));
  }
};

export const validateLottoNumbersOutOfRange = (numbers) => {
  if (
    IsNumberInRangeOfArray(
      numbers,
      SETTING.LOTTO_NUMBER_RANGE.MIN,
      SETTING.LOTTO_NUMBER_RANGE.MAX
    )
  ) {
    throw new Error(ERROR_MESSAGE.LOTTO.NUMBERS_OUT_OF_RANGE(numbers));
  }
};
