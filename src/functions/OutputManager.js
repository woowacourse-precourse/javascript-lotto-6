import { Console } from "@woowacourse/mission-utils";
import { sortNumbers } from "../utils/sort.js";
import { EMPTY_LINE, STATISTICS_MESSAGE } from "../constants/messages.js";
import { generateUniqueRandomNumbers } from "../utils/random.js";

class OutputManager {
  showLottoNumbers(countsOfLottoToNumber) {
    let purchasedLotto = [];
    for (let i = 0; i < countsOfLottoToNumber; i += 1) {
      let newLottoNumbers = sortNumbers(generateUniqueRandomNumbers());
      Console.print(newLottoNumbers);
      purchasedLotto.push(newLottoNumbers);
    }
    return purchasedLotto;
  }

  showStatistics(rankCounts, earnRate) {
    Console.print(STATISTICS_MESSAGE.winningStatistics);
    Console.print(STATISTICS_MESSAGE.devideLine);
    Console.print(
      `${STATISTICS_MESSAGE.rank5}${rankCounts[5]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank4}${rankCounts[4]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank3}${rankCounts[3]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank2}${rankCounts[2]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.rank1}${rankCounts[1]}${STATISTICS_MESSAGE.unit}`
    );
    Console.print(
      `${STATISTICS_MESSAGE.finalReturn}${earnRate}${STATISTICS_MESSAGE.finalReturnAfter}`
    );
  }

  showEmptyLine() {
    Console.print(EMPTY_LINE);
  }
}

export default OutputManager;
