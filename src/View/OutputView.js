import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";


const OutputView = {

  print(message) {
    Console.print(message);
  },

  printLotteries(lotteries) {
    this.print(OUTPUT_MESSAGE.purchased(lotteries.length));
    lotteries.map((lottery) => {
      this.print(lottery);
    });
  },
}

export default OutputView;