import { ERROR_MESSAGE } from "./constatns/message.js"
import { LOTTO } from "./constatns/number.js"

export const validAmountCheck = async (amount) => {
  if ((amount % LOTTO.PRICE) !== 0 || isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.AMOUNT);
  }
  return amount;
}

export const validBonusNumberCheck = async (number) => {
  if (number.includes(",")) {
    throw new Error(ERROR_MESSAGE.BONUS_NUM_COUNT);
  }
  if (number < LOTTO.START_NUM || number > LOTTO.END_NUM) {
    throw new Error(ERROR_MESSAGE.NUM_RANGE);
  }
  return number;
}