import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

const InputView = {
  printError(error) {
    MissionUtils.Console.print(error);
  },

  printPurchaseLottoTickets(tickets) {
    MissionUtils.Console.print(tickets.length + "개를 구매했습니다.")
    for (let lotto of tickets) {
      const sortedNumbers = lotto.getNumbers().slice().sort((a, b) => a - b);
      MissionUtils.Console.print(sortedNumbers);
    }
  },
};

export default InputView;
