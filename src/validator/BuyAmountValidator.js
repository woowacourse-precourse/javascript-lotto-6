import { MESSAGE_ERROR } from '../constants/Message.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;
  if (!regExp.test(input)) {
    throw new Error(MESSAGE_ERROR.isNotNumber);
  }
};

const isDividedByThousand = (input) => {
  if (input % LOTTO_PRICE !== 0) {
    throw new Error(MESSAGE_ERROR.isNotDividedByThousand);
  }
};

export function isValidBuyAmount(input) {
  isNumber(input);
  isDividedByThousand(input);
}
