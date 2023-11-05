import { printMessage } from "./PrintMessages.js";
import { getPurchaseAmount } from "./GetPurchaseAmount.js";
import { calcPurchaseQuantity } from "./calcPurchaseQuantity.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #purchase_amount;
  #purchase_quantity;
  #lotto;

  constructor(purchase_amount, purchase_quantity, lotto) {
    this.#purchase_amount = purchase_amount;
    this.#purchase_quantity = purchase_quantity;
    this.#lotto = lotto;
  }

  async play() {
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
    this.#purchase_amount = await getPurchaseAmount();
    this.#purchase_quantity = calcPurchaseQuantity(this.#purchase_amount);
    const LOTTO = new Lotto();
    this.#lotto = LOTTO.returnLotto(this.#purchase_quantity);
    printMessage("\n");
    printMessage(`${this.#purchase_quantity}개를 구매했습니다.`);
  }
}

const app = new App();
await app.play();

export default App;
