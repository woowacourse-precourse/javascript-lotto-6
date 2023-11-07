import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_FACTOR, OUTPUT_MESSAGE } from "../constants/message.js";

class OutputView {
  printPurchaseResult(purchasedLottoNumbers) {
    const purchasedResultString = messageGenerator.purchaseResultString(purchasedLottoNumbers);
    const lottoNumbers = messageGenerator.lottoNumbers(purchasedLottoNumbers);

    const purchasedResultMessage = `${MESSAGE_FACTOR.newLine}${purchasedResultString}${lottoNumbers}`;

    Console.print(purchasedResultMessage);
  }

  printMatchResult(lottoMatchResult) {
    const matchResultString = messageGenerator.matchResultString();
    const matchResultSeperator = messageGenerator.matchResultSeperator();
    const matchResult = Object.entries(lottoMatchResult)
      .filter(([place, count]) => place !== MESSAGE_FACTOR.returnRate)
      .map(([place, count]) => messageGenerator.generatePlaceMessage(place, count))
      .join(MESSAGE_FACTOR.blankSeperator);
    const returnRateResult = messageGenerator.returnRate(lottoMatchResult.returnRate);

    const matchResultMessage = `${MESSAGE_FACTOR.newLine}${matchResultString}${matchResultSeperator}${matchResult}${returnRateResult}`;

    Console.print(matchResultMessage);
  }

  printError(error) {
    Console.print(error);
  }
}

const messageGenerator = {
  purchaseResultString(purchasedLottoNumbers) {
    return `${purchasedLottoNumbers.length}${OUTPUT_MESSAGE.purchaseResult}`;
  },

  lottoNumbers(purchasedLottoNumbers) {
    return purchasedLottoNumbers
      .map((row) => `${MESSAGE_FACTOR.openArray}${row.sort((a, b) => a - b).join(MESSAGE_FACTOR.joinSeperator)}${MESSAGE_FACTOR.closeArray}`)
      .join(MESSAGE_FACTOR.newLine);
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
