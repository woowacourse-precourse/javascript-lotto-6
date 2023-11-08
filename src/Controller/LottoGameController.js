class LottoGameController {
  #view;

  #lottoService;

  #prizeService;

  constructor({ view, lottoService, prizeService }) {
    this.#view = view;
    this.#lottoService = lottoService;
    this.#prizeService = prizeService;
  }

  async #retryOnError(callback) {
    try {
      return await callback();
    } catch (error) {
      this.#view.printError(error);

      return this.#retryOnError(callback);
    }
  }

  async startGame() {
    const lottos = await this.#retryOnError(() => this.#getLotto());
    const winningLotto = await this.#retryOnError(() =>
      this.#createWinningLotto(),
    );

    const prizes = this.#getLottoPrize({ lottos, winningLotto });
    const profitRate = this.#getProfitRate({ prizes, lottos });
    this.#view.printGameResult({ prizes, profitRate });
  }

  #getLottoPrize({ lottos, winningLotto }) {
    const prizes = lottos.map((lotto) =>
      this.#prizeService.getPrize({ lotto, winningLotto }),
    );

    return this.#prizeService.countPrize(prizes);
  }

  #getProfitRate({ prizes, lottos }) {
    return this.#prizeService.getProfitRate({
      prizes,
      purchaseQuantity: lottos.length,
    });
  }

  async #getLotto() {
    const lottos = await this.#purchaseLotto();
    this.#view.printPurchasedResult(lottos);

    return lottos;
  }

  async #purchaseLotto() {
    const purchaseAmount = await this.#view.readPurchaseAmount();

    return this.#lottoService.sellLotto(purchaseAmount);
  }

  async #createWinningLotto() {
    const numbers = await this.#view.readWinningNumber();
    const bonusNumber = await this.#view.readBonusNumber();

    return this.#lottoService.generateWinningLotto({
      numbers,
      bonusNumber,
    });
  }
}

export default LottoGameController;
