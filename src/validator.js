import { ERROR_MESSAGE } from "./constatns/message.js"
import { LOTTO_PRICE } from "./constatns/number.js"

export const validAmountCheck = async (amount) => {
  if ((amount % LOTTO_PRICE) !== 0)
    throw new Error(ERROR_MESSAGE.AMOUNT)
}