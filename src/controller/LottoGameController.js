import LottoService from '../service/LottoService.js';
import InputView from '../views/InputView.js';

class LottoGameController {
  #lottoService;

  async run() {
    await this.#takePurchaseMoneyStage();
  }

  async #takePurchaseMoneyStage() {
    const purchaseMoney = await InputView.readPurchaseMoney();
    this.#issueTicketStage(purchaseMoney);
  }

  #issueTicketStage(purchaseMoney) {
    this.#lottoService = new LottoService(Number(purchaseMoney));
    console.log(this.#lottoService.issueTickets());
  }
}

export default LottoGameController;
