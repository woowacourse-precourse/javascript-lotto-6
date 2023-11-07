import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, SCOREBOARD } from "../Utilities/Constant.js";

class LottoView {
  createPurchaseData(numberOfSets, lottoNumbers) {
    const formattedNumbers = lottoNumbers
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");
    return `${numberOfSets}${MESSAGE.PURCHASING_TEXT}${formattedNumbers}`;
  }

  #getMatchResultText(key, value) {
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
  }

  createLottoResult(statistics) {
    const lottoResult = [
      MESSAGE.IN_TOTAL,
      MESSAGE.MID_BAR_TRIO,
      ...Object.entries(statistics)
        .filter(([key]) => key !== "totalPrize")
        .map(([key, value]) => this.#getMatchResultText(key, value)),
    ];
    return lottoResult.join("\n");
  }

  displayResult(result) {
    Console.print(result);
  }
}

export default LottoView;
