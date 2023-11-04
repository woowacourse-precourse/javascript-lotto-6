import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages.js";

class OutputView {
  printLottos(totalCount, lottos) {
    Console.print(`${totalCount}개를 ${MESSAGES.buy}`);
    for (let lotto of lottos) {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
  }

  printResult(income, price, result) {
    const rateOnReturn = ((income / price) * 100).toLocaleString();
    Console.print(`${MESSAGES.prize.fifth} - ${result[5]}개`);
    Console.print(`${MESSAGES.prize.fourth} - ${result[4]}개`);
    Console.print(`${MESSAGES.prize.third} - ${result[3]}개`);
    Console.print(`${MESSAGES.prize.second} - ${result[2]}개`);
    Console.print(`${MESSAGES.prize.first} - ${result[1]}개`);
    Console.print(`총 수익률은 ${rateOnReturn}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}

export default OutputView;
