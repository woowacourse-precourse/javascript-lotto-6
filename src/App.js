import { printMessage } from "./PrintMessages.js";
import { getPurchaseAmount } from "./GetPurchaseAmount.js";
import { calcPurchaseQuantity } from "./calcPurchaseQuantity.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  #purchase_amount;
  #purchase_quantity;

  constructor(purchase_amount, purchase_quantity) {
    this.#purchase_amount = purchase_amount;
    this.#purchase_quantity = purchase_quantity;
  }

  async play() {
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
    this.#purchase_amount = await getPurchaseAmount();
    this.#purchase_quantity = calcPurchaseQuantity(this.#purchase_amount);
  }
}

const app = new App();
await app.play();

export default App;
