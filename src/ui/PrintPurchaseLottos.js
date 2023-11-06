import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import collectLotto from "../controller/Lotto/collectLotto.js";

const printPurchaseLotto = (count) => {
  Console.print(`\n${count}${Messages.PURCHASE_COUNT_MESSAGE}`);
  for (let i = 0; i < count; i++) {
    Console.print(collectLotto(count)[i]);
  }
};

export default printPurchaseLotto;
