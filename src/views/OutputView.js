import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "../constants/messages";

class OutputView {
  printLottos(totalCount, lottos) {
    Console.print(`${totalCount}개를 ${MESSAGES.buy}`);
    for (let lotto of lottos) {
      Console.print(lotto);
    }
  }

  printResult(income, result) {
    Console.print(`${MESSAGES.prize.fifth} - ${result[5]}개`);
    Console.print(`${MESSAGES.prize.fourth} - ${result[4]}개`);
    Console.print(`${MESSAGES.prize.third} - ${result[3]}개`);
    Console.print(`${MESSAGES.prize.second} - ${result[2]}개`);
    Console.print(`${MESSAGES.prize.first} - ${result[1]}개`);
    Console.print(`총 수익률은 ${income}%입니다.`);
  }

  print(message) {
    Console.print(message);
  }
}

export default OutputView;
