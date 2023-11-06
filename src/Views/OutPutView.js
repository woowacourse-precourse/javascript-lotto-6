import { Console } from "@woowacourse/mission-utils";
import { formatMoney } from "../utils/NumberFormat.js";

// TODO 상수 분리

const LOTTO_AWARD = {
  1: {
    money: 2000000000,
    message: "6개 일치",
  },
  2: {
    money: 30000000,
    message: "5개 일치, 보너스 볼 일치",
  },
  3: {
    money: 1500000,
    message: "5개 일치",
  },
  4: {
    money: 50000,
    message: "4개 일치",
  },
  5: {
    money: 5000,
    message: "3개 일치",
  },
};

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
    Object.keys(LOTTO_AWARD)
      .map(Number)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        const rankIndex = rank - 1;
        const count = lottoWinningCounts[rankIndex];

        Console.print(
          `${LOTTO_AWARD[rank].message} (${formatMoney(
            LOTTO_AWARD[rank].money
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
