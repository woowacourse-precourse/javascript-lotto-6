import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/messages.js";

class View {
  #printConsole(message) {
    return Console.print(message);
  }
  /* NONE ERROR */
  announcePurchasing(purchaseAmmount, lottos) {
    this.#printConsole(`${purchaseAmmount}${MESSAGES.COMMENT_PURCHASE_AMOUNT}`);
    lottos.forEach((lotto) => {
      this.#printConsole(`[${lotto.getLottoNumbers.join(", ")}]`);
    });
    return true;
  }

  /* ERROR */
  errorNoInput() {
    this.#printConsole(MESSAGES.ERROR_NO_INPUT);
    return false;
  }

  errorPurchaseCost() {
    this.#printConsole(MESSAGES.ERROR_INPUT_PURCHASING_NUMBER);
    return false;
  }
}

export default View;
