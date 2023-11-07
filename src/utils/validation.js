import { ERROR_MESSAGE } from "../constants/message.js";
import {
  NoInputError,
  NotNumberError,
  InvalidAmountRangeError,
  InvalidAmountUnitError,
  InvalidLottoNumberCountError,
  DuplicatedNumberError,
  InvalidBonusNumberCountError,
  InvalidNumberRangeError,
  NotIntegerError,
} from "./Error.js";

export const LOTTO_NUMBERS_VALILDATOR = Object.freeze({
  invalidLottoNumberCount(numbers) {
    if (numbers.length !== 6) throw new InvalidLottoNumberCountError(ERROR_MESSAGE.invalidLottoNumberCount);
  },

  duplicatedNumber(numbers) {
    if (new Set(numbers).size !== numbers.length) throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
  },
});

export const BONUS_NUMBER_VALIDATOR = Object.freeze({
  invalidBonusNumberCount(bonusNumber, lottoWinningNumbers) {
    if (bonusNumber.length !== 1) throw new InvalidBonusNumberCountError(ERROR_MESSAGE.invalidBonusNumberCount);
  },

  duplicatedNumber(bonusNumber, lottoWinningNumbers) {
    if (new Set(bonusNumber.concat(lottoWinningNumbers)).size === lottoWinningNumbers.length)
      throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
  },
});

export const COMMON_NUMBER_VALIDATOR = Object.freeze({
  notNumber(numbers) {
    if (numbers.some(isNaN)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
  },

  invalidNumberRange(numbers) {
    if (numbers.some((number) => number < 1 || number > 45)) throw new InvalidNumberRangeError(ERROR_MESSAGE.invalidNumberRange);
  },

  notInteger(numbers) {
    if (numbers.some((number) => !Number.isInteger(number))) throw new NotIntegerError(ERROR_MESSAGE.notInteger);
  },
});

export const PURCHASE_AMOUNT_VALIDATOR = {
  noInput(purchaseAmount) {
    if (purchaseAmount === "") throw new NoInputError(ERROR_MESSAGE.noInput);
  },

  notNumber(purchaseAmount) {
    if (isNaN(purchaseAmount)) throw new NotNumberError(ERROR_MESSAGE.notNumber);
  },

  invalidAmountRange(purchaseAmount) {
    if (purchaseAmount < 1000) throw new InvalidAmountRangeError(ERROR_MESSAGE.invalidAmountRange);
  },

  invalidAmountUnit(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) throw new InvalidAmountUnitError(ERROR_MESSAGE.invalidAmountUnit);
  },
};
