import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_OUTPUT_MESSAGE, PRICE } from "../constants.js";
const { Console } = MissionUtils;

class OutputView {
  printLotteryTickets(lotteryTickets) {
    MissionUtils.Console.print(`${lotteryTickets.length}${LOTTO_OUTPUT_MESSAGE.numOfLotto}`);
    lotteryTickets.map((ele) => Console.print(`[${ele.join(", ")}]`));
  }

  printLotteryResult(winningTickets, lottoROI) {
    MissionUtils.Console.print(LOTTO_OUTPUT_MESSAGE.winningStatistics);

    PRICE.map((ele) => {
      Console.print(`${ele.message}${winningTickets[ele.count]["count"]}개`);
    });
    for (const key in winningTickets) {
    }

    MissionUtils.Console.print(`총 수익률은 ${lottoROI}%입니다.`);
  }
}

export default OutputView;

// "3개 일치 (5,000원) - 1개"
