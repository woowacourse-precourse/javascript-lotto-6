import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";

class OutputView {
  printLottos(totalCount, lottos) {
    this.print(`${totalCount}개를 ${MESSAGES.buy}`);
    lottos.forEach((lotto) => {
      this.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  printResult(price, result, income) {
    this.print(`${MESSAGES.prize.fifth} - ${result[5]}개`);
    this.print(`${MESSAGES.prize.fourth} - ${result[4]}개`);
    this.print(`${MESSAGES.prize.third} - ${result[3]}개`);
    this.print(`${MESSAGES.prize.second} - ${result[2]}개`);
    this.print(`${MESSAGES.prize.first} - ${result[1]}개`);

    const rateOnReturn = ((income / price) * 100).toLocaleString();
    this.print(`총 수익률은 ${rateOnReturn}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}

export default OutputView;
