import { Console } from "@woowacourse/mission-utils";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

export default class OutputView {
  static printPurchseResults(numOfLottos) {
    Console.print(`\n${numOfLottos}개를 구매했습니다.`);
  }

  static printResultMessage(result, yieldRate) {
    let resultMessages = `\n당첨 통계\n---\n`;
    for (const [key, { prize, matchNum }] of Object.entries(
      LOTTO_SETTINGS.WINNINGS
    )) {
      let text = `${matchNum}개 일치`;

      if (key === "SECOND_PRIZE") text += ", 보너스 볼 일치";
      resultMessages += `${text} (${prize.toLocaleString()}원) - ${
        result[key]
      }개\n`;
    }
    resultMessages += `총 수익률은 ${yieldRate}%입니다.`;
    Console.print(resultMessages);
  }

  static printLottos(lottosArray) {
    const output = lottosArray
      .map((numbers) => `[${numbers.join(", ")}]`)
      .join("\n");

    Console.print(output);
  }

  static printYieldRate(yieldRate) {
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }

  static print(message) {
    Console.print(message);
  }
}
