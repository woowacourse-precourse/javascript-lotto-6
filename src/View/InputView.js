import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  async readLottoPurchaseAmount() {
    const lottoPurchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_PURCHASE_AMOUNT);
    return Number(lottoPurchaseAmount);
  },
};

export default InputView;
