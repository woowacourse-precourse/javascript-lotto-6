import { Console } from "@woowacourse/mission-utils";
import Messages from "../common/messages.js";
import makeLotto from "../controller/Lotto/makeLotto.js";

const PrintPurchaseLotto = (count) => {
  Console.print(`\n${count}${Messages.PURCHASE_COUNT_MESSAGE}`);
};

export default PrintPurchaseLotto;
