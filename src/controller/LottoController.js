import InputView from "../view/InputView.js";

class LottoController {
  #lottos;
  #quantity;

  async playGame() {
    await this.inputPurchasePrice();
  }

  async inputPurchasePrice() {
    this.#quantity = await InputView.readPurchasePrice();
  }
}

export default LottoController;
