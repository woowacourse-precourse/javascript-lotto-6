import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_OUTPUT_MESSAGE } from "../constants.js";
import Lotto from "../models/Lotto.js";

class OutputView {
  async printLotteryTicketsCount(lotteryTicketsCount) {
    await MissionUtils.Console.print(`${lotteryTicketsCount}${LOTTO_OUTPUT_MESSAGE.numOfLotto}`);
  }

  async printLotteryTickets(lotteryTicketsCount) {
    const lotteryTickets = [];

    for (let i = 0; i < lotteryTicketsCount; i++) {
      let lottoNumbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      await MissionUtils.Console.print(`[${lottoNumbers.join(", ")}]`);

      lotteryTickets.push(lottoNumbers);
    }

    return lotteryTickets;
  }

  printLotteryResult(lotteryResult, lottoROI) {
    MissionUtils.Console.print(LOTTO_OUTPUT_MESSAGE.winningStatistics);

    lotteryResult.map((ele) => {
      MissionUtils.Console.print(`${LOTTO_OUTPUT_MESSAGE.matches(ele.prize)}${ele.count}개`);
      MissionUtils.Console.print(`총 수익률은 ${lottoROI}%입니다.`);
    });
  }
}

export default OutputView;
