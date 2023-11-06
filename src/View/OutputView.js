import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  printPurchaseResult(purchasedLottoNumbers) {
    const purchasedResultString = messageGenerator.purchaseResultString(purchasedLottoNumbers);
    const lottoNumbers = messageGenerator.lottoNumbers(purchasedLottoNumbers);
    const purchasedResultMessage = `\n${purchasedResultString}${lottoNumbers}`;
    Console.print(purchasedResultMessage);
  },

  printMatchResult(lottoMatchResult) {
    const matchResultString = messageGenerator.matchResultString();
    const matchResultSeperator = messageGenerator.matchResultSeperator();
    const matchResult = Object.entries(lottoMatchResult)
      .filter(([place, count]) => place !== "returnRate")
      .map(([place, count]) => messageGenerator.generatePlaceMessage(place, count))
      .join("");
    const returnRateResult = messageGenerator.returnRate(lottoMatchResult.returnRate);
    const matchResultMessage = `\n${matchResultString}${matchResultSeperator}${matchResult}${returnRateResult}`;
    Console.print(matchResultMessage);
  },
};

const messageGenerator = {
  purchaseResultString(purchasedLottoNumbers) {
    return `${purchasedLottoNumbers.length}${OUTPUT_MESSAGE.purchaseResult}`;
  },
  lottoNumbers(purchasedLottoNumbers) {
    return purchasedLottoNumbers.map((row) => `[${row.sort((a, b) => a - b).join(", ")}]`).join("\n");
  },
  matchResultString() {
    return OUTPUT_MESSAGE.matchResult;
  },
  matchResultSeperator() {
    return OUTPUT_MESSAGE.seperator;
  },
  generatePlaceMessage(place, matchCount) {
    return `${OUTPUT_MESSAGE[place]}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  returnRate(rate) {
    return `${OUTPUT_MESSAGE.returnRate}${rate}${OUTPUT_MESSAGE.returnRatePostFix}`;
  },
};

export default OutputView;
