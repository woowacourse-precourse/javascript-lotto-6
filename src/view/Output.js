import Messages from "../utils/Messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
  #messages = new Messages();

  async printResult(result) {
    MissionUtils.Console.print(this.#messages.getResultMsg(result));
  }

  async printLotto(lotto) {
    MissionUtils.Console.print(this.#messages.getLottoMsg(lotto));
  }

  async printMoney(money) {
    MissionUtils.Console.print(this.#messages.getMoneyMsg(money));
  }

  async printBonus(bonus) {
    MissionUtils.Console.print(this.#messages.getBonusMsg(bonus));
  }

  async printProfitRate(profitRate) {
    MissionUtils.Console.print(this.#messages.getRateOfReturnMsg(profitRate));
  }

  async printCount(count) {
    MissionUtils.Console.print(this.#messages.getCountMsg(count));
  }

  async printGeneratedLottos(lottosArr) {
    // "[1, 2, 3, 4, 5, 6]" 형식으로 출력
    for (let i = 0; i < lottosArr.length; i++) {
      MissionUtils.Console.print("[" + String(lottosArr[i].join(", ")) + "]");
    }
  }

  async printError(e) {
    MissionUtils.Console.print(e.message);
  }

  async printspace() {
    MissionUtils.Console.print("");
  }
}

export default Output;
