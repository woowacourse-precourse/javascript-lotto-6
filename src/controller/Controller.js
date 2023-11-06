import { Lotto } from '../domain/index.js';
import { LottoPurchaseService, LottoRewardsService } from '../service/index.js';
import { InputView, OutputView } from '../view/index.js';

class Controller {
  #view = {
    input: InputView,
    output: OutputView,
  };

  #service = {
    lottoPurchase: LottoPurchaseService,
    lottoRewards: LottoRewardsService.of(),
  };

  async start() {
    await this.#withRetry(() => this.#createUserLotto());
  }

  async #createUserLotto() {
    const money = await this.#readPurchaseMoney();
    const lottos = this.#service.lottoPurchase.buyLottos(money);

    this.#printLottos(lottos);
  }

  async #readPurchaseMoney() {
    const money = await this.#view.input.readPurchaseMoney();
    return Number(money);
  }

  /**
   * @param {Lotto} lottos
   */
  #printLottos(lottos) {
    lottos.forEach((lotto) => this.#view.output.userLottos(lotto));
  }

  async #withRetry(action) {
    try {
      await action();
    } catch ({ message }) {
      this.#view.output.error(message);
      await this.#withRetry(action);
    }
  }
}

export default Controller;
