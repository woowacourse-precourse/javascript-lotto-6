import Constant from '../Constants/Constant.js';
import { ERROR_MESSAGE } from '../Constants/Message.js';
import MyError from './MyError.js';

const isNotEmpty = (input) => {
  if (!input) {
    throw new MyError(ERROR_MESSAGE.IS_EMPTY);
  }
};
const isNumber = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new MyError(ERROR_MESSAGE.INPUT_NUMBER);
  }
};

const isDisvisible = (input) => {
  if (input % Constant.UNIT_OF_AMOUNT !== 0) {
    throw new MyError(ERROR_MESSAGE.NOT_DISVISIBLE);
  }
};

const isCorrectLength = (input) => {
  if (input.length !== 6) {
    throw new MyError(ERROR_MESSAGE.WRONG_LENGTH);
  }
};

const isNotDuplicated = (input) => {
  const set = new Set(input);
  if (set.size !== input.length) {
    throw new MyError(ERROR_MESSAGE.IS_DUPLICATED);
  }
};

const isNumberInRange = (input) => {
  if (!(input >= Constant.MIN_RANDOM_NUMBER && input <= Constant.MAX_RANDOM_NUMBER)) {
    throw new MyError(ERROR_MESSAGE.NOT_IN_RANGE);
  }
};

const validateGoalNumber = (numbers) => {
  numbers.forEach((number) => {
    isNumber(number);
    isNumberInRange(number);
  });
  isCorrectLength(numbers);
  isNotDuplicated(numbers);
};

const validatePurchaseAmount = (purchaseAmount) => {
  isNotEmpty(purchaseAmount);
  isNumber(purchaseAmount);
  isDisvisible(purchaseAmount);
};

export { validatePurchaseAmount, validateGoalNumber };
