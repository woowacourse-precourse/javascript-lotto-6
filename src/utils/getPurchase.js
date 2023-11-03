import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/messages/inputMessage.js";
import { checkLottoPurchase } from "../validators/lottoPurchaseValidator.js";

export const getPurchase = async () => {
  const input = await Console.readLineAsync(inputMessage.PURCHASE_MESSAGE);
  const cash = parseInt(input);

  return checkLottoPurchase(cash);
};
