import { printMessage } from "./PrintMessages.js";
import { getPurchaseAmount } from "./GetPurchaseAmount.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "./constants.js";

class App {
  #purchase_amount;

  constructor(purchase_amount) {
    this.#purchase_amount = purchase_amount;
  }

  async play() {
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
    this.#purchase_amount = getPurchaseAmount();
  }
}

const app = new App();
await app.play();

export default App;
