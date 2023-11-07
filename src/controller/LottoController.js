import LottoService from '../services/LottoService.js';
import LottoView from '../views/LottoView.js';

class LottoController {
  #service;

  #view;

  constructor() {
    this.#service = new LottoService();
    this.#view = new LottoView();
  }

  async play() {
    await this.#readPurchaseAmount();
    this.#buyLottos();
  }

  // 스택 오버플로우를 방지하기 위해 재귀 대신 while loop를 사용
  async #readPurchaseAmount() {
    while (!this.#service.getAccount()) {
      try {
        const purchaseAmount = await this.#view.readPurchaseAmount();
        this.#service.setPurchaseAmount(purchaseAmount);
      } catch (error) {
        this.#view.print(error.message);
      }
    }
  }

  #buyLottos() {
    this.#service.buyLottos();
    const lottoCounts = this.#service.getLottos().length;
    this.#view.printLottoCounts(lottoCounts);
  }
}

export default LottoController;
