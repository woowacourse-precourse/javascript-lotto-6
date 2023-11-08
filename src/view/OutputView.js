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
  
  static printResult(lotteryResult, earningRatio) {
    Console.print(Statics.message.output.lotteryResult.header);
    Console.print(Statics.message.output.lotteryResult.func5(lotteryResult.place5));
    Console.print(Statics.message.output.lotteryResult.func4(lotteryResult.place4));
    Console.print(Statics.message.output.lotteryResult.func3(lotteryResult.place3));
    Console.print(Statics.message.output.lotteryResult.func2(lotteryResult.place2));
    Console.print(Statics.message.output.lotteryResult.func1(lotteryResult.place1));
		Console.print(Statics.message.output.lotteryResult.earningRatio(earningRatio));
  }
}

export default OutputView;