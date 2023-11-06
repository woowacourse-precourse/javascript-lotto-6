import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  printPurchaseResult(purchasedLottoNumbers) {
    const purchasedResultString = messageGenerator.purchaseResultString(purchasedLottoNumbers);
    const lottoNumbers = messageGenerator.lottoNumbers(purchasedLottoNumbers);
    const purchasedResultMessage = `\n${purchasedResultString}${lottoNumbers}`;
    Console.print(purchasedResultMessage);
  },
};

const messageGenerator = {
  lottoNumbers(purchasedLottoNumbers) {
    return purchasedLottoNumbers.map((row) => `[${row.join(", ")}]`).join("\n");
  },
  purchaseResultString(purchasedLottoNumbers) {
    return `${purchasedLottoNumbers.length}${OUTPUT_MESSAGE.purchaseResult}`;
  },
};

export default OutputView;
