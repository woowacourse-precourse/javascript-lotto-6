import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #lottos;
  #quantity;

  async playGame() {
    await this.inputPurchasePrice();
    this.outputPurchaseQuantity();
  }

  async inputPurchasePrice() {
    this.#quantity = await InputView.readPurchasePrice();
  }

  outputPurchaseQuantity() {
    OutputView.printPurchaseQuantity(this.#quantity);
  }
}

export default LottoController;
