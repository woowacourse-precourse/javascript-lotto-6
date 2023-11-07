import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_RULE } from "../Constants.js";

class OutputView {
  static lottoBundle({ purchaseHistory }) {
    Console.print(
      OutputView.lottoBundleMessage({ purchaseHistory }).join("\n"),
    );
  }

  static result({ prizeMap, winRate }) {
    Console.print(OutputView.resultMessage({ prizeMap, winRate }).join("\n"));
  }

  static err({ message }) {
    if (Object.values(ERROR_MESSAGE).includes(message)) Console.print(message);
    else Console.print(ERROR_MESSAGE.UNKNOWN_ERROR);
  }

  static lottoBundleMessage({ purchaseHistory }) {
    return [
      "",
      `${purchaseHistory.length}개를 구매했습니다.`,
      ...purchaseHistory.map((numbers) => `[${numbers.join(", ")}]`),
      "",
    ];
  }

  static resultMessage({ prizeMap, winRate }) {
    return [
      "",
      "당첨 통계",
      "---",
      ...OutputView.prizeMessage(prizeMap),
      `총 수익률은 ${winRate.toFixed(GAME_RULE.DECIMAL_POINT)}%입니다.`,
    ];
  }

  static prizeMessage(prizeMap) {
    return [
      `3개 일치 (5,000원) - ${prizeMap.get(5) ?? 0}개`,
      `4개 일치 (50,000원) - ${prizeMap.get(4) ?? 0}개`,
      `5개 일치 (1,500,000원) - ${prizeMap.get(3) ?? 0}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeMap.get(2) ?? 0}개`,
      `6개 일치 (2,000,000,000원) - ${prizeMap.get(1) ?? 0}개`,
    ];
  }
}

export default OutputView;
