import { printMessage } from "./PrintMessages.js";
import { getPurchaseAmount } from "./GetPurchaseAmount.js";
import { calcPurchaseQuantity } from "./calcPurchaseQuantity.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #purchase_amount;
  #purchase_quantity;
  #lotto_list;

  constructor(purchase_amount, purchase_quantity, lotto_list) {
    this.#purchase_amount = purchase_amount;
    this.#purchase_quantity = purchase_quantity;
    this.#lotto_list = lotto_list;
  }

  async play() {
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
    this.#purchase_amount = await getPurchaseAmount();
    this.#purchase_quantity = calcPurchaseQuantity(this.#purchase_amount);
    const LOTTO = new Lotto();
    this.#lotto_list = LOTTO.returnLotto(this.#purchase_quantity);
    printMessage("\n");
    printMessage(`${this.#purchase_quantity}개를 구매했습니다.`);
    this.#lotto_list.map((lotto) => printMessage(lotto));
  }
}

const app = new App();
await app.play();

export default App;
