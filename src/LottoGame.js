import { Console } from "@woowacourse/mission-utils";
import { validateInputMoney } from "./Validator.js";

class LottoGame {
  #gameCount;

  constructor() {
    this.#gameCount = 0;
  }

  async getUserInputMoney() {
    try {
      const userInputMoney = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      validateInputMoney(userInputMoney);
      this.#gameCount = userInputMoney / 1000;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoGame;
