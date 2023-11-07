import { Console } from "@woowacourse/mission-utils";
import { SCOREBOARD } from "../Constants/Constant.js";

class LottoView {
  createPurchaseData(numberOfSets, lottoNumbers) {
    const formattedNumbers = lottoNumbers
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");
    return `${numberOfSets}개를 구매했습니다. \n${formattedNumbers}`;
  }

  createLottoResult(statistics) {
    const lottoResult = [
      "당첨 통계",
      "---",
      ...Object.entries(statistics)
        .filter(([key]) => key !== "totalPrize")
        .map(([key, value]) => {
          switch (key) {
            case "3":
            case "4":
            case "5":
            case "6":
              return `${SCOREBOARD[`MATCH_${key}`]} - ${value}개`;
            case "5+bonus":
              return `${SCOREBOARD.MATCH_5_BONUS} - ${value}개`;
            case "profitRate":
              return `총 수익률은 ${value}%입니다.`;
            default:
              return `${key}개 일치 - ${value}개`;
          }
        }),
    ];
    return lottoResult.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
