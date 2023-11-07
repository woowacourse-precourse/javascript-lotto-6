import InputView from '../view/InputView.js';

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  async gameStart() {
    this.purchaseAmount = await InputView.readPurchaseAmount();
    this.winningNumbers = await InputView.readWinningNumbers();
    this.bonusNumber = await InputView.readBonusNumber();
  }
}

export default LottoController;
