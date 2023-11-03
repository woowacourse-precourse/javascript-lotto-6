import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import WinningNum from "./WinningNum.js";

class View {
  static #INPUT_MONEY = "구입금액을 입력해 주세요.\n";
  static #COUNT_LOTTO_QUERY = "개를 구매했습니다.";

  static async askInputMoney() {
    const answer = await Console.readLineAsync(View.#INPUT_MONEY);
    Validator.validateMoneyUnit(answer);
    Validator.validateInputMoney(answer);
    return answer;
  }

  static async printLottoCount(numberOfTickets) {
    MissionUtils.Console.print(numberOfTickets + View.#COUNT_LOTTO_QUERY);
  }

  static async showTickets(tickets) {
    tickets.forEach((ticket) => {
      console.log(`[${ticket.join(", ")}]`);
    });
  }

  static async askWinningNum() {
    const askWinning = new WinningNum();
    await askWinning.askWinningNum();
  }
}

export default View;
