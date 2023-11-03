import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import Lotto from "./Lotto.js";
import LottoTickets from "./LottoTickets.js";

class View {
  static #INPUT_MONEY = "구입금액을 입력해 주세요.\n";
  static #COUNT_LOTTO_QUERY = "개를 구매했습니다.";

  static async askInputMoney() {
    const answer = await Console.readLineAsync(View.#INPUT_MONEY);
    Validator.validateMoneyUnit(answer);
    Validator.validateInputMoney(answer);
    return answer;
  }

  static async printLottoCount() {
    const lotto = new Lotto();
    const inputMoney = await lotto.countingLottos();
    MissionUtils.Console.print(inputMoney + View.#COUNT_LOTTO_QUERY);
  }

  static async showTickets(tickets) {
    tickets.forEach((ticket) => {
      console.log(`[${ticket.join(", ")}]`);
    });
  }
}

export default View;
