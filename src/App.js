import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const SUM_OF_PURCHASE = await this.inputAmount();

    if (SUM_OF_PURCHASE % 1000 !== 0) {
      Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      return;
    }
    this.SHOW_WINNING(WINNING);
  }

  async inputAmount() {
    while (true) {
      const SUM_OF_PURCHASE = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      if (SUM_OF_PURCHASE % 1000 === 0) {
        return parseInt(SUM_OF_PURCHASE, 10);
      } else {
        Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      }
    }
  }
}

export default App;
