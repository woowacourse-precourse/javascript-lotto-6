import { readLineAsync } from "../common/utils.js";
import { MESSAGE } from "../common/constants.js";
export const purchaseAmountInput = async () => {
  const input = await readLineAsync(MESSAGE.ENTER_PURCHASE_AMOUNT);
  return input;
};

export const winningNumberInput = async () => {
  const input = await readLineAsync(MESSAGE.ENTER_WINNING_NUMBER);
  return input;
};

export const bonusNumberInput = async () => {
  const input = await readLineAsync(MESSAGE.ENTER_BONUS_NUMBER);
  return input;
};
