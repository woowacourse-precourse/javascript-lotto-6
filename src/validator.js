import { ERROR_MESSAGE } from "./constatns/message.js"
import { LOTTO_PRICE, LOTTO_COUNT, LOTTO_START_NUM, LOTTO_END_NUM } from "./constatns/number.js"

export const validAmountCheck = async (amount) => {
  if ((amount % LOTTO_PRICE) !== 0)
    throw new Error(ERROR_MESSAGE.AMOUNT);
}

export const validBonusNumberCheck = async (number) => {
  if (number.includes(","))
    throw new Error(ERROR_MESSAGE.BONUS_NUM_COUNT);
  if (number < LOTTO_START_NUM || number > LOTTO_END_NUM)
    throw new Error(ERROR_MESSAGE.NUM_RANGE);
  return number;
}