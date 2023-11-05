class LottoGameController {
  #view;

  #lottoService;

  #prizeService;

  constructor({ view, lottoService, prizeService }) {
    this.#view = view;
    this.#lottoService = lottoService;
    this.#prizeService = prizeService;
  }

  async startGame() {
    const lottos = await this.#purchaseLottos();
    this.#view.printPurchasedResult(lottos);
    const winningLotto = await this.#createWinningLotto();

    const prizes = lottos.map((lotto) =>
      this.#prizeService.getPrize({ lotto, winningLotto }),
    );
  }

  async #purchaseLottos() {
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
