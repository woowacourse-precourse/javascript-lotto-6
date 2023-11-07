import { Console } from "@woowacourse/mission-utils";
import { sortNumbers } from "../utils/sort.js";
import {
  EMPTY_LINE,
  PURCHASE_MESSAGE,
  STATISTICS_MESSAGE,
} from "../constants/messages.js";
import { generateUniqueRandomNumbers } from "../utils/random.js";
import Lotto from "../Lotto.js";

class OutputManager {
  showLottoNumbers(countsOfLottoToNumber) {
    let purchasedLotto = [];
    for (let count = 0; count < countsOfLottoToNumber; count += 1) {
      let newLottoNumbers = sortNumbers(generateUniqueRandomNumbers());
      new Lotto(newLottoNumbers); // validation check
      // 그대로 출력할 경우 배열 모양의 문자열 형태로 출력하지 못하기에 가공하여 출력한다.
      Console.print(`[${newLottoNumbers.join(", ")}]`);
      purchasedLotto.push(newLottoNumbers);
    }
    return purchasedLotto;
  }

  showPurchaseAmount(countsOfLotto) {
    Console.print(`${countsOfLotto}${PURCHASE_MESSAGE.purchaseNumber}`);
  }

  showStatistics(rankCounts, earnRate) {
    Console.print(STATISTICS_MESSAGE.winningStatistics);
    Console.print(STATISTICS_MESSAGE.divideLine);
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

  showError(error) {
    Console.print(error);
  }
}

export default OutputManager;
