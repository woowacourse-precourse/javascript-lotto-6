import { Console } from "@woowacourse/mission-utils";
import Message from "./utils/Message.js";

class LottoController {
  constructor() {}
  async askBudget() {
    const input = await Console.readLineAsync(Message.ASK_BUDGET);
  }
}

export default LottoController;
