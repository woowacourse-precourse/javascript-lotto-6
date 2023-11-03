import { ERROR_MESSAGES } from '../constants/messages.js';
import LottoStore from '../model/LottoStore.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

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
    await this.#showLottos();
  }

  async #buyLottos() {
    try {
      this.#purchaseAmount = await this.#inputView.readPurchaseAmount();
      this.#lottoStore = new LottoStore(this.#purchaseAmount);
      this.#lottos = this.#lottoStore.getLottos();
    } catch (error) {
      OutputView.print(error);
      OutputView.printError(ERROR_MESSAGES.invalidAmount);
      await this.#buyLottos();
    }
  }

  async #showLottos() {
    OutputView.printLottosQuantity(this.#lottos.length);
    OutputView.printLottos(this.#lottos);
  }
}

export default LottoController;
