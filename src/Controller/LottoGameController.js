class LottoGameController {
  #view;

  #lottoService;

  constructor({ view, lottoService }) {
    this.#view = view;
    this.#lottoService = lottoService;
  }

  async startGame() {
    const purchaseAmount = await this.#view.readPurchaseAmount();
    const purchasedLottos = this.#lottoService.sellLotto(purchaseAmount);

    this.#view.printPurchasedResult(purchasedLottos);
  }
}

export default LottoGameController;
