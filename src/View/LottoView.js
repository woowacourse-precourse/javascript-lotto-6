import { Console } from "@woowacourse/mission-utils";
import { SCOREBOARD, LottoResultKey } from "../Utilities/Constant.js";

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
          const formattedKey = LottoResultKey[key] || `${key}개 일치`;
          if (key === "profitRate") {
            return `총 수익률은 ${value}%입니다.`;
          }
          return `${SCOREBOARD[formattedKey]} - ${value}개`;
        }),
    ];
    return lottoResult.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
