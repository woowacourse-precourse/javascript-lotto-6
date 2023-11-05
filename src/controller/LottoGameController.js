import InputView from '../views/InputView.js';

class LottoGameController {
  async run() {
    await this.#takePurchaseMoneyStage();
  }

  async #takePurchaseMoneyStage() {
    const purchaseMoney = await InputView.readPurchaseMoney();
    console.log(purchaseMoney);
  }
}

export default LottoGameController;
