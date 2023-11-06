import { ERROR_MESSAGE } from "./constatns/message.js"

export const validAmountCheck = async (amount) => {
  if ((amount % 1000) !== 0)
    throw new Error(ERROR_MESSAGE.AMOUNT)
}