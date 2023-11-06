import InputView from "../view/InputView.js";

class LottoGameController {
  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  async readPurchaseAmount() {
    await InputView.purchaseAmount((input) => {
      this.printPurchaseAmount(input);
    });
  }

  printPurchaseAmount(amount) {
    console.log(amount);
  }
}

export default LottoGameController;
