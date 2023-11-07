import Lotto from "./Lotto.js";
import { LOTTO, MESSAGE } from "./common/constants.js";
import { lottoRandomNumber, print } from "./common/utils.js";
import { validatePurchaseInput } from "./common/validation.js";
import { purchaseAmountInput } from "./view/inputView.js";

class App {
  constructor() {
    this.lottos = [];
  }

  async play() {
    this.startLotto();
  }

  async startLotto() {
    const inputPurchaseAmount = await purchaseAmountInput();
    this.purchaseQuantity(inputPurchaseAmount);
  }

  async purchaseQuantity(inputPurchaseAmount) {
    this.validateInput(inputPurchaseAmount);
    const lottoQuantity = inputPurchaseAmount / LOTTO.PRICE;
    this.createLotto(lottoQuantity);
  }

  async validateInput(inputPurchaseAmount) {
    validatePurchaseInput(inputPurchaseAmount);
  }

  createLotto(lottoQuantity) {
    while (this.lottos.length < lottoQuantity) {
      const lottoNumber = lottoRandomNumber(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
      this.lottos.push(new Lotto(lottoNumber));
    }
    print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
    this.lottos.forEach((lotto) => lotto.printLottos());
  }
}

export default App;
