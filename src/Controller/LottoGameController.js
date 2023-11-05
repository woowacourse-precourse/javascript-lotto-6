class LottoGameController {
  #view;

  #lottoService;

  constructor({ view, lottoService }) {
    this.#view = view;
    this.#lottoService = lottoService;
  }

  async startGame() {
    const lottos = await this.#purchaseLottos();
    this.#view.printPurchasedResult(lottos);

    const winningLotto = await this.#createWinningLotto();
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
