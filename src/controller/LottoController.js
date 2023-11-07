import InputView from "../view/InputView";
import Validator from "../utils/Validator";

class LottoController {
  #inputView;
  #validator;

  constructor() {
    this.#inputView = new InputView();
    this.#validator = new Validator();
  }

  async gameStart() {
    await this.#purchaseLotto();
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#inputView.readPurchaseAmount();
    this.#validator.validatePurchaseAmount(purchaseAmount);
  }
}

export default LottoController;
