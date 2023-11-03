import LottoStore from '../model/LottoStore.js';
import InputView from '../view/InputView.js';

class LottoController {
  #purchaseAmount;

  #inputView;

  #lottoStore;

  #lottos;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    await this.#buyLottos();
  }

  async #buyLottos() {
    this.#purchaseAmount = await this.#inputView.readPurchaseAmount();
    this.#lottoStore = new LottoStore(this.#purchaseAmount);
    this.#lottos = this.#lottoStore.getLottos();
  }
}

export default LottoController;
