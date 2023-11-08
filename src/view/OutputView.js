import { Console } from "@woowacourse/mission-utils";
import Statics from "../static/Statics.js";

class OutputView {
  static printLottos(lottos) {
    Console.print(Statics.message.output.printMAXpurchasableAmount(lottos.length));
    lottos.map(lotto => Console.print(Statics.message.output.printArrayAsString(lotto)))
  }

  static printError(errorMessage) {
    Console.print(errorMessage);
  } 
  
  static printResult() {
    // 우승 로직 출력
  }
}

export default OutputView;