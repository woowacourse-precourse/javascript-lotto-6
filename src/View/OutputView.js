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
      .map(([place, count]) => messageGenerator[place](count))
      .join("");
    const matchResultMessage = `\n${matchResultString}${matchResultSeperator}${matchResult}`;
    Console.print(matchResultMessage);
  },
};

const messageGenerator = {
  purchaseResultString(purchasedLottoNumbers) {
    return `${purchasedLottoNumbers.length}${OUTPUT_MESSAGE.purchaseResult}`;
  },
  lottoNumbers(purchasedLottoNumbers) {
    return purchasedLottoNumbers.map((row) => `[${row.join(", ")}]`).join("\n");
  },
  matchResultString() {
    return OUTPUT_MESSAGE.matchResult;
  },
  matchResultSeperator() {
    return OUTPUT_MESSAGE.seperator;
  },
  fifthPlace(matchCount) {
    return `${OUTPUT_MESSAGE.fifthPlace}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  fourthPlace(matchCount) {
    return `${OUTPUT_MESSAGE.fourthPlace}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  thirdPlace(matchCount) {
    return `${OUTPUT_MESSAGE.thirdPlace}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  secondPlace(matchCount) {
    return `${OUTPUT_MESSAGE.secondPlace}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  firstPlace(matchCount) {
    return `${OUTPUT_MESSAGE.firstPlace}${matchCount}${OUTPUT_MESSAGE.resultUnit}`;
  },
  returnRate(rate) {
    return `${OUTPUT_MESSAGE.returnRate}${rate}${OUTPUT_MESSAGE.returnRatePostFix}`;
  },
};

export default OutputView;
