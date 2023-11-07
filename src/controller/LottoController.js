import InputView from '../view/InputView.js';

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
  }

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
    this.winningNumbers = await InputView.readWinningNumbers();
  }
}

export default LottoController;
