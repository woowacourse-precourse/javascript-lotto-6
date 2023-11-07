import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../lib/constants/message.js";

const InputView = {
  async inputPayment() {
    return Number(await Console.readLineAsync(GAME_MESSAGE.PAYMENT_INPUT));
  },
};

export default InputView;
