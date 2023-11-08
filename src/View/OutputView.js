import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";


const OutputView = {

  print(message) {
    Console.print(message);
  },

  printLotteries(lottos) {
    this.print(OUTPUT_MESSAGE.purchased(lottos.length));
    lottos.map((lotto) => {
      this.print(lotto.toString());
    });
  },

  printResult(matchResult) {
    this.print(OUTPUT_MESSAGE.lottoResult);
    this.print(OUTPUT_MESSAGE.fifthPlaceWin(matchResult.fifthPlaceWin));
    this.print(OUTPUT_MESSAGE.fourthPlaceWin(matchResult.fourthPlaceWin));
    this.print(OUTPUT_MESSAGE.thirdPlaceWin(matchResult.thirdPlaceWin));
    this.print(OUTPUT_MESSAGE.secondPlaceWin(matchResult.secondPlaceWin));
    this.print(OUTPUT_MESSAGE.firstPlaceWin(matchResult.firstPlaceWin));
  },

  printIncomePercentage(incomePercentage) {
    this.print(OUTPUT_MESSAGE.incomeResult(incomePercentage));
  }
}

export default OutputView;