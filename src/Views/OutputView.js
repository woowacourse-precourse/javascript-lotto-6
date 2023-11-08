import { Console } from "@woowacourse/mission-utils";
import { LottoSettings } from "../config/gameSetting.js";

export default class OutputView {
  static printPurchseResults(numOfLottos) {
    Console.print(`\n${numOfLottos}개를 구매했습니다.`);
  }

  static printResultMessage(result, yieldRate) {
    let resultMessages = `\n당첨 통계\n---\n`;
    resultMessages += this.#createWinningResultMessage(result);
    const formatedYiel = this.#formatYield(yieldRate);
    resultMessages += `총 수익률은 ${formatedYiel}%입니다.`;
    Console.print(resultMessages);
  }

  static #createWinningResultMessage(result) {
    const setting = new LottoSettings();
    let winningResultMessage = "";
    for (const [key, { prize, matchNum }] of Object.entries(
      setting.getAllPrizeDetails()
    )) {
      let text = `${matchNum}개 일치`;

      if (key === setting.getSecondPrizeRank()) text += ", 보너스 볼 일치";
      winningResultMessage += `${text} (${prize.toLocaleString()}원) - ${
        result[key]
      }개\n`;
    }
    return winningResultMessage;
  }

  static #formatYield(yieldRate) {
    return parseFloat(yieldRate).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
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
