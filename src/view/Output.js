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

  async printError(e) {
    MissionUtils.Console.print(e.message);
  }
}

export default Output;
