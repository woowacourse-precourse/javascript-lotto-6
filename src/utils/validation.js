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
import { ERROR_MESSAGE } from "../constants/message.js";
import { LOTTO, PURCHASE_AMOUNT } from "../constants/lotto.js";

export const LOTTO_NUMBERS_VALILDATOR = Object.freeze({
  invalidLottoNumberCount(numbers) {
    if (numbers.length !== LOTTO.numberLength) 
      throw new InvalidLottoNumberCountError(ERROR_MESSAGE.invalidLottoNumberCount);
  },

  duplicatedNumber(numbers) {
    if (new Set(numbers).size !== numbers.length) 
      throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
  },
});

export const BONUS_NUMBER_VALIDATOR = Object.freeze({
  invalidBonusNumberCount(bonusNumber, lottoWinningNumbers) {
    if (bonusNumber.length !== LOTTO.bonusNumberLength) 
      throw new InvalidBonusNumberCountError(ERROR_MESSAGE.invalidBonusNumberCount);
  },

  duplicatedNumber(bonusNumber, lottoWinningNumbers) {
    if (new Set(bonusNumber.concat(lottoWinningNumbers)).size === lottoWinningNumbers.length)
      throw new DuplicatedNumberError(ERROR_MESSAGE.duplicatedNumber);
  },
});

export const COMMON_NUMBER_VALIDATOR = Object.freeze({
  notNumber(numbers) {
    if (numbers.some(isNaN))
      throw new NotNumberError(ERROR_MESSAGE.notNumber);
  },

  invalidNumberRange(numbers) {
    if (numbers.some((number) => number < LOTTO.minValue || number > LOTTO.maxValue))
      throw new InvalidNumberRangeError(ERROR_MESSAGE.invalidNumberRange);
  },

  notInteger(numbers) {
    if (numbers.some((number) => !Number.isInteger(number)))
      throw new NotIntegerError(ERROR_MESSAGE.notInteger);
  },
});

export const PURCHASE_AMOUNT_VALIDATOR = {
  noInput(purchaseAmount) {
    if (purchaseAmount === PURCHASE_AMOUNT.noInput)
      throw new NoInputError(ERROR_MESSAGE.noInput);
  },

  notNumber(purchaseAmount) {
    if (isNaN(purchaseAmount))
      throw new NotNumberError(ERROR_MESSAGE.notNumber);
  },

  invalidAmountRange(purchaseAmount) {
    if (purchaseAmount < PURCHASE_AMOUNT.minValue)
      throw new InvalidAmountRangeError(ERROR_MESSAGE.invalidAmountRange);
  },

  invalidAmountUnit(purchaseAmount) {
    if (purchaseAmount % PURCHASE_AMOUNT.unit !== PURCHASE_AMOUNT.checkRemain)
      throw new InvalidAmountUnitError(ERROR_MESSAGE.invalidAmountUnit);
  },
};
