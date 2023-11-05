import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/messages.js";
import { checkLottoPurchase } from "../validators/lottoPurchaseValidator.js";

export const getPurchase = async () => {
  let cash;

  while (true) {
    try {
      const input = await Console.readLineAsync(inputMessage.PURCHASE_MESSAGE);
      cash = parseInt(input);

      if (checkLottoPurchase(cash)) break;
    } catch (error) {
      console.error(error.message);
    }
  }
  return cash;
};
