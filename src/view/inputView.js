import { readLineAsync } from "../common/utils.js";
import { MESSAGE } from "../common/constants.js";
export const purchaseAmountInput = async () => {
  const input = await readLineAsync(MESSAGE.ENTER_PURCHASE_AMOUNT);
  return input;
};
