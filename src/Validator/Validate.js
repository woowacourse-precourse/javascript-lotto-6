import Constant from '../Constants/Constant.js';
import { ERROR_MESSAGE } from '../Constants/Message.js';

const isNotEmpty = (input) => {
  return !input;
};

const isNumber = (input) => {
  return Number.isNaN(Number(input));
};

const isAllNumberInArray = (input) => {
  return input.some((n) => Number.isNaN(Number(n)));
};

const isDisvisible = (input) => {
  return input % Constant.UNIT_OF_AMOUNT !== 0;
};

const isCorrectLength = (input) => {
  return input.length !== 6;
};

const isNotDuplicated = (input) => {
  const set = new Set(input);
  return set.size !== input.length;
};

const isNumberInRange = (input) => {
  return !(input >= Constant.MIN_RANDOM_NUMBER && input <= Constant.MAX_RANDOM_NUMBER);
};

const isAllNumberInRangeInArray = (input) => {
  return input.some((n) => !(n >= Constant.MIN_RANDOM_NUMBER && n <= Constant.MAX_RANDOM_NUMBER));
};

const validateLotto = (numbers) => {
  if (isAllNumberInArray(numbers)) return [true, ERROR_MESSAGE.INPUT_NUMBER];
  if (isAllNumberInRangeInArray(numbers)) return [true, ERROR_MESSAGE.NOT_IN_RANGE];
  if (isCorrectLength(numbers)) return [true, ERROR_MESSAGE.WRONG_LENGTH];
  if (isNotDuplicated(numbers)) return [true, ERROR_MESSAGE.IS_DUPLICATED];
  return [false, ''];
};

const validatePurchaseAmount = async (purchaseAmount) => {
  if (isNotEmpty(purchaseAmount)) return [true, ERROR_MESSAGE.IS_EMPTY];
  if (isNumber(purchaseAmount)) return [true, ERROR_MESSAGE.INPUT_NUMBER];
  if (isDisvisible(purchaseAmount)) return [true, ERROR_MESSAGE.NOT_DISVISIBLE];
  return [false, ''];
};

const validateBonusNumber = (bonusNumber, goalLotto) => {
  if (isNumber(bonusNumber)) return [true, ERROR_MESSAGE.INPUT_NUMBER];
  if (isNumberInRange(bonusNumber)) return [true, ERROR_MESSAGE.NOT_IN_RANGE];
  if (isNotDuplicated([...goalLotto, Number(bonusNumber)])) return [true, ERROR_MESSAGE.IS_DUPLICATED];
  return [false, ''];
};

export { validatePurchaseAmount, validateLotto, validateBonusNumber };
