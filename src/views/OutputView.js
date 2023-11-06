import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE,  WINNING_RESULT_DETAILS } from "../constants/Message";

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

  static printResult(roi, result) {
    Console.print(GUIDE_MESSAGE.winningStatistics);
    Console.print(GUIDE_MESSAGE.divider);

    Console.print(`${WINNING_RESULT_DETAILS.FIFTH}${result[5]}개`);
    Console.print(`${WINNING_RESULT_DETAILS.FOURTH}${result[4]}개`);
    Console.print(`${WINNING_RESULT_DETAILS.THIRD}${result[3]}개`);
    Console.print(`${WINNING_RESULT_DETAILS.SECOND}${result[2]}개`);
    Console.print(`${WINNING_RESULT_DETAILS.FIRST}${result[1]}개`);
    Console.print(
      GUIDE_MESSAGE.totalReturn.replace('*', roi.toLocaleString("ko-KR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }))
    );
  }
}
