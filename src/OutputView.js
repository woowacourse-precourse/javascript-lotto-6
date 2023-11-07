import { MissionUtils } from "@woowacourse/mission-utils";
import { WINNING_RANK } from "./Rule.js";

const InputView = {
  printError(error) {
    MissionUtils.Console.print(error);
  },

  printPurchaseLottoTickets(tickets) {
    MissionUtils.Console.print(tickets.length + "개를 구매했습니다.");
    for (let lotto of tickets) {
      const sortedNumbers = lotto
        .getNumbers()
        .slice()
        .sort((a, b) => a - b);
      const output = "[" + sortedNumbers.join(", ") + "]";
      MissionUtils.Console.print(output);
    }
  },

  printWinningStatistics(statistics) {
    MissionUtils.Console.print("당첨 통계\n---");
    const ranks = Object.keys(WINNING_RANK).reverse();
    for (let rank of ranks) {
      let output = this.createOutput(rank, statistics);
      MissionUtils.Console.print(output);
    }
  },

  createOutput(rank, statistics) {
    if (rank === "second") {
      return (
        WINNING_RANK[rank].matchingNumberCount +
        "개 일치, 보너스 볼 일치 (" +
        WINNING_RANK[rank].reward.toLocaleString().replace(/_/g, ",") +
        "원) - " +
        statistics[rank] +
        "개"
      );
    }
    return (
      WINNING_RANK[rank].matchingNumberCount +
      "개 일치 (" +
      WINNING_RANK[rank].reward.toLocaleString().replace(/_/g, ",") +
      "원) - " +
      statistics[rank] +
      "개"
    );
  },

  printRateOfReturn(rateOfReturn) {
    const output = rateOfReturn.toLocaleString("en", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    MissionUtils.Console.print("총 수익률은 " + output + "%입니다.");
  },
};

export default InputView;
