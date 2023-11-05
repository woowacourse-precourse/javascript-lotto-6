import { MESSAGE_ERROR } from '../constants/Message.js';

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;
  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.isNotNumber);
  }
};

export function isValidBuyAmount(input) {
  isNumber(input);
}
