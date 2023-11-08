import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../libs/Constant";

class View {
  printAllLotto(lotto) {
    Console.print("\n" + lotto.length + "개를 구매했습니다.");

    lotto.forEach((element) => {
      Console.print("[" + element.join(", ") + "]");
    });
  }

  statisticsPrint(statistics) {
    Console.print(MESSAGES.LOTTO_WINNING_STATISTICS);
    Console.print("---");
    Console.print("3개 일치 (5,000원) - " + statistics[0] + "개");
    Console.print("4개 일치 (50,000원) - " + statistics[1] + "개");
    Console.print("5개 일치 (1,500,000원) - " + statistics[2] + "개");
    Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " + statistics[4] + "개"
    );
    Console.print("6개 일치 (2,000,000,000원) - " + statistics[3] + "개");
  }

  printRateOfReturn(rate) {
    Console.print("총 수익률은 " + rate + "%입니다.");
  }
}

export default View;
