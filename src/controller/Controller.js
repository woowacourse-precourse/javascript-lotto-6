import SYSTEM from '../constants/system.js';
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
    await this.#withRetry(() => this.#createWinningLottoNumbers());
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
   * @param {Lotto[]} lottos
   */
  #printLottos(lottos) {
    this.#view.output.lottoQuantity(lottos.length);
    this.#view.output.userLotto(lottos);
  }

  async #createWinningLottoNumbers() {
    const winningLottoNumbers = await this.#readWinningLottoNumbers();
    this.#service.lottoRewards.createWinningLotto(winningLottoNumbers);
  }

  async #readWinningLottoNumbers() {
    const winningLottoNumbers = await this.#view.input.readWinningNumbers();
    return Array.from(winningLottoNumbers.split(SYSTEM.lottoNumberSeparator), Number);
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
