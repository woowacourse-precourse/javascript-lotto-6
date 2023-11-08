import { Console } from "@woowacourse/mission-utils";
import { Messages } from "../Messages.js";

class OutputView {
  printLottos(totalCount, lottos) {
    this.print(`\n${totalCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().sort((a, b) => a - b);
      this.print(`[${numbers.join(", ")}]`);
    });
  }

  printResult(price, result, income) {
    this.print("\n당첨 통계\n---");
    this.print(`${Messages.MATCH_3}${result[5]}개`);
    this.print(`${Messages.MATCH_4}${result[4]}개`);
    this.print(`${Messages.MATCH_5}${result[3]}개`);
    this.print(`${Messages.MATCH_5_WITH_BONUS}${result[2]}개`);
    this.print(`${Messages.MATCH_6}${result[1]}개`);

    const rateOnReturn = ((income / price) * 100).toLocaleString();
    this.print(`총 수익률은 ${rateOnReturn}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}

export default OutputView;
