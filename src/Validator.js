import {
  EMPTY_LENGTH,
  CURRENCY_NUMBER_TO_DIVIDE,
  WINNING_NUMBER_COUNTS,
} from "./constants/constants.js";
import {
  BONUS_NUMBER_ERROR_MESSAGE,
  PURCHASE_AMOUNT_ERROR_MESSAGE,
  LOTTO_NUMBERS_ERROR_MESSAGE,
} from "./constants/messages.js";

const Validator = Object.freeze({
  validatePurchaseAmount: (purchaseAmount) => {
    if (isEmpty(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.empty_amount;
    }

    if (!isNumeric(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.contains_character;
    }

    if (!isInteger(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.not_integer;
    }

    if (!isDivisibleByCurrencyNumber(purchaseAmount)) {
      throw PURCHASE_AMOUNT_ERROR_MESSAGE.not_divisible_by_currency_number;
    }
  },

  validateLottoNumbers: (numbers) => {
    const lottoNumbers = numbers.map(String);

    if (isDuplicated(lottoNumbers)) {
      throw LOTTO_NUMBERS_ERROR_MESSAGE.duplicated;
    }


    if (!hasCorrectLength(lottoNumbers)) {
      throw LOTTO_NUMBERS_ERROR_MESSAGE.empty_numbers;
    }

    lottoNumbers.map((number) => {
      if (isEmpty(number)) {
        throw LOTTO_NUMBERS_ERROR_MESSAGE.empty_numbers;
      }

      if (!isNumeric(number)) {
        throw LOTTO_NUMBERS_ERROR_MESSAGE.invalid_character;
      }

      if (!isInteger(number)) {
        throw LOTTO_NUMBERS_ERROR_MESSAGE.not_integer;
      }

      if (!isInRange(number)) {
        throw LOTTO_NUMBERS_ERROR_MESSAGE.not_in_range;
      }
    });
  },

  validateBonusNumber: (number, numbers) => {
    if (isEmpty(number)) {
      throw BONUS_NUMBER_ERROR_MESSAGE.empty_number;
    }

    if (!isNumeric(number)) {
      throw BONUS_NUMBER_ERROR_MESSAGE.contains_character;
    }

    if (!isInteger(number)) {
      throw BONUS_NUMBER_ERROR_MESSAGE.not_integer;
    }

    if (!isInRange(number)) {
      throw BONUS_NUMBER_ERROR_MESSAGE.not_in_range;
    }

    if (isDuplicated([...numbers, number])) {
      throw BONUS_NUMBER_ERROR_MESSAGE.duplicated;
    }
  },
});

const isEmpty = (string) => {
  return string.trim().length === EMPTY_LENGTH;
};

const isNumeric = (string) => {
  return !isNaN(Number(string));
};

const isInteger = (string) => {
  return Number.isInteger(Number(string));
};

const isDivisibleByCurrencyNumber = (string) =>
  Number(string) % CURRENCY_NUMBER_TO_DIVIDE === 0 ? true : false;

const isInRange = (string) => Number(string) >= 1 && Number(string) <= 45;

const isDuplicated = (array) => {
  const set = new Set(array);

  return set.size !== array.length;
};

const hasCorrectLength = (winningNumbers) =>
  winningNumbers.length === WINNING_NUMBER_COUNTS;

export default Validator;
