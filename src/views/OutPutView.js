import { Console } from "@woowacourse/mission-utils";
import { formatMoney } from "../utils/NumberFormat.js";
import { LOTTO_PRIZE } from "../constants.js";
import { OUTPUT_MESSAGE } from "../message.js";

class OutPutView {
  printBuyLottoCount(count) {
    Console.print(OUTPUT_MESSAGE.buyLottoCount(count));
  }

  printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      Console.print(OUTPUT_MESSAGE.lottoNumbers(lottoNumbers));
    });
  }

  printNewLine() {
    Console.print(OUTPUT_MESSAGE.newLine);
  }

  printLottoResultInfoMessage() {
    Console.print(OUTPUT_MESSAGE.lottoResultInfo);
  }

  printLottoResults(lottoWinningCounts) {
    Object.keys(LOTTO_PRIZE)
      .map(Number)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        const rankIndex = rank - 1;
        const count = lottoWinningCounts[rankIndex];
        const formatedMoney = formatMoney(LOTTO_PRIZE[rank].money);

        Console.print(
          OUTPUT_MESSAGE.lottoResults(
            LOTTO_PRIZE[rank].message,
            formatedMoney,
            count
          )
        );
      });
  }

  printLottoReturns(totalProfit) {
    Console.print(OUTPUT_MESSAGE.lottoReturns(totalProfit));
  }
}

export default OutPutView;
