import { Console } from "@woowacourse/mission-utils";
import { formatMoney } from "../utils/NumberFormat.js";
import { LOTTO_PRIZE } from "../constants.js";
// TODO 상수 분리

class OutPutView {
  printBuyLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );
  }

  printNewLine() {
    Console.print("");
  }

  printLottoResultInfoMessage() {
    Console.print("당첨 통계");
    Console.print("---");
  }

  printLottoResults(lottoWinningCounts) {
    Object.keys(LOTTO_PRIZE)
      .map(Number)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        const rankIndex = rank - 1;
        const count = lottoWinningCounts[rankIndex];

        Console.print(
          `${LOTTO_PRIZE[rank].message} (${formatMoney(
            LOTTO_PRIZE[rank].money
          )}원) - ${count}개`
        );
      });
  }

  printLottoReturns(profit, consumption) {
    Console.print(
      `총 수익률은 ${((profit / consumption) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default OutPutView;
