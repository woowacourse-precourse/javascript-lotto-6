import { ERROR_MESSAGE } from "./constatns/message.js"
import { LOTTO_PRICE, LOTTO_COUNT, LOTTO_START_NUM, LOTTO_END_NUM } from "./constatns/number.js"

export const validAmountCheck = async (amount) => {
  if ((amount % LOTTO_PRICE) !== 0)
    throw new Error(ERROR_MESSAGE.AMOUNT);
}

export const validWinningNumberCheck = async (numbers) => {
  const numbersArray = numbers.split(",");
  // 숫자 개수 체크
  if (numbersArray.length !== LOTTO_COUNT)
    throw new Error(ERROR_MESSAGE.NUM_COUNT);
  // 숫자 범위 체크
  numbersArray.forEach((number) => {
    if (number < LOTTO_START_NUM || number > LOTTO_END_NUM)
      throw new Error(ERROR_MESSAGE.NUM_RANGE);
  })
  return numbersArray;
}