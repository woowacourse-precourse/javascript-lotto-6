import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const MessageGenerator = {
  lottoNumbers(purchasedLottoNumbers) {
    return purchasedLottoNumbers.map((row) => `[${row.join(", ")}]`).join("\n");
  },
  purchaseResultString(purchasedLottoNumbers) {
    return `${purchasedLottoNumbers.length}${OUTPUT_MESSAGE.PURCHASE_RESULT}`;
  },
};

const OutputView = {
  printPurchaseResult(purchasedLottoNumbers) {
    const purchasedResultString = MessageGenerator.purchaseResultString(purchasedLottoNumbers);
    const lottoNumbers = MessageGenerator.lottoNumbers(purchasedLottoNumbers);
    const purchasedResultMessage = `\n${purchasedResultString}${lottoNumbers}`;
    Console.print(purchasedResultMessage);
  },
};

export default OutputView;
