import InputView from '../view/InputView.js';

class LottoController {
  startGame() {
    const purchaseAmount = InputView.readPurchaseAmount();
  }
}

export default LottoController;
