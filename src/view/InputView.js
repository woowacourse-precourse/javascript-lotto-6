import { Console } from "@woowacourse/mission-utils";
import { Message } from "../static/Constant.js";

const InputView = {
  async purchaseAmount() {
    const input = await Console.readLineAsync(Message.LOTTO_PURCHASE_AMOUNT);
    return input;
  },
  async lottoWinningNumber() {
    const input = await Console.readLineAsync(Message.LOTTO_WINNING_NUMBER);
    return input;
  },
  async lottoBonusNumber() {
    const input = await Console.readLineAsync(Message.LOTTO_BONUS_NUMBER);
    return input;
  },
};

export default InputView;
