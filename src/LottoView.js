import { Console } from "@woowacourse/mission-utils";
import { SCOREBOARD } from "./Constant.js";

class LottoView {
  createPurchaseData(numberOfSets, lottoNumbers) {
    const formattedNumbers = lottoNumbers
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");
    return `${numberOfSets}개를 구매했습니다. \n${formattedNumbers}`;
  }

  createLottoResult(statistics) {
    const lottoResult = [];
    lottoResult.push("당첨 통계");
    lottoResult.push("---");

    Object.entries(statistics).forEach(([key, value]) => {
      switch (key) {
        case "3":
          lottoResult.push(`${SCOREBOARD.MATCH_3} - ${value}개`);
          break;
        case "4":
          lottoResult.push(`${SCOREBOARD.MATCH_4} - ${value}개`);
          break;
        case "5":
          lottoResult.push(`${SCOREBOARD.MATCH_5} - ${value}개`);
          break;
        case "5+bonus":
          lottoResult.push(`${SCOREBOARD.MATCH_5_BONUS} - ${value}개`);
          break;
        case "6":
          lottoResult.push(`${SCOREBOARD.MATCH_6} - ${value}개`);
          break;
        case "totalPrize":
          break;
        case "profitRate":
          lottoResult.push(`총 수익률은 ${value}%입니다.`);
          break;
        default:
          lottoResult.push(`${key}개 일치 - ${value}개`);
          break;
      }
    });

    return lottoResult.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
