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

  printResult(matchResult) {
    this.print(
      OUTPUT_MESSAGE.winningResult +
      OUTPUT_MESSAGE.threeNumbersCorrect(matchResult.threeNumbersCorrect) +
      OUTPUT_MESSAGE.fourNumbersCorrect(matchResult.fourNumbersCorrect) +
      OUTPUT_MESSAGE.fiveNumbersCorrect(matchResult.fiveNumbersCorrect) +
      OUTPUT_MESSAGE.fiveNumbersAndBonusBallCorrect(matchResult.fiveNumbersAndBonusBallCorrect) +
      OUTPUT_MESSAGE.sixNumbersCorrect(matchResult.sixNumbersCorrect)
    );
  },

  printIncomePercentage(incomePercentage) {
    this.print(OUTPUT_MESSAGE.incomeResult(incomePercentage));
  }
}

export default OutputView;