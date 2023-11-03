import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./messages";

export default class InputView {
  static async promptToBuyLottos() {
    const money = await Console.readLineSync(
      `${MESSAGES.PROMPT_PURCHASE_VALUE}\n`
    );
    return money.trimt();
  }
}
