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

const validatePurchaseAmount = (purchaseAmount) => {
  isNotEmpty(purchaseAmount);
  isNumber(purchaseAmount);
  isDisvisible(purchaseAmount);
};

export { validatePurchaseAmount };
