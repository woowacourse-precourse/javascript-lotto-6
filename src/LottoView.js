import { Console } from "@woowacourse/mission-utils";
import { SCOREBOARD } from "./Constant.js";

class LottoView {
  createPurchaseInfoString(numberOfSets, lottoNumbers) {
    const formattedNumbers = lottoNumbers
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");
    return `${numberOfSets}개를 구매했습니다. \n${formattedNumbers}`;
  }

  createStatisticsString(statistics) {
    const statisticsStrings = [];
    statisticsStrings.push("당첨 통계");
    statisticsStrings.push("---");

    Object.entries(statistics).forEach(([key, value]) => {
      switch (key) {
        case "3":
          statisticsStrings.push(`${SCOREBOARD.MATCH_3} - ${value}개`);
          break;
        case "4":
          statisticsStrings.push(`${SCOREBOARD.MATCH_4} - ${value}개`);
          break;
        case "5":
          statisticsStrings.push(`${SCOREBOARD.MATCH_5} - ${value}개`);
          break;
        case "5+bonus":
          statisticsStrings.push(`${SCOREBOARD.MATCH_5_BONUS} - ${value}개`);
          break;
        case "6":
          statisticsStrings.push(`${SCOREBOARD.MATCH_6} - ${value}개`);
          break;
        case "totalPrize":
          break;
        case "profitRate":
          statisticsStrings.push(`총 수익률은 ${value}%입니다.`);
          break;
        default:
          statisticsStrings.push(`${key}개 일치 - ${value}개`);
          break;
      }
    });

    return statisticsStrings.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
