import InputView from "../view/InputView.js";

class LottoGameController {
  constructor() {}

  startGame() {
    this.readPurchaseAmount();
  }

  readPurchaseAmount() {
    InputView.PurchaseAmount(this.printPurchaseAmount);
  }

  printPurchaseAmount(amount) {
    console.log(amount);
  }
}

export default LottoGameController;
