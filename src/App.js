import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #cost = 0;
  #winningNum = [];
  #extraNum = 0;

  async inputCost() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.costValid(input);
  }
  costValid(input) {
    if (/\d/.test(input) && input % 1000 === 0 && input > 0) {
      this.#cost = input;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  constructor() {}

  async play() {
    await this.inputCost();
  }
}

export default App;
