import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";


const OutputView = {

  print(message) {
    Console.print(message);
  },

  printLotteries(lotteries) {
    this.print(OUTPUT_MESSAGE.purchased(lotteries.length));
    lotteries.map((lottery) => {
      this.print(JSON.stringify(lottery).replace(/,/g, ', '));
    });
  },

  printResult(matchResult) {
    this.print(OUTPUT_MESSAGE.winningResult);
    this.print(OUTPUT_MESSAGE.threeNumbersCorrect(matchResult.threeNumbersCorrect));
    this.print(OUTPUT_MESSAGE.fourNumbersCorrect(matchResult.fourNumbersCorrect));
    this.print(OUTPUT_MESSAGE.fiveNumbersCorrect(matchResult.fiveNumbersCorrect));
    this.print(OUTPUT_MESSAGE.fiveNumbersAndBonusBallCorrect(matchResult.fiveNumbersAndBonusBallCorrect));
    this.print(OUTPUT_MESSAGE.sixNumbersCorrect(matchResult.sixNumbersCorrect));
  },

  printIncomePercentage(incomePercentage) {
    this.print(OUTPUT_MESSAGE.incomeResult(incomePercentage));
  }
}

export default OutputView;