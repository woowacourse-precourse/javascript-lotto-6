import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
export default class OutputView {
  static printLottoCount(lottoCount) {
    Console.print(`${lottoCount}${GUIDE_MESSAGE.totalTickets}`);
  }

  static printLottos(lottos) {
    for (let lotto of lottos) {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    }
  }
}