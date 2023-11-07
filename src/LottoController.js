class LottoController {
  #view;

  #lottoService;

  constructor({ view, lottoService }) {
    this.#view = view;
    this.#lottoService = lottoService;
  }

  async #purchaseLottos() {
    const purchaseAmount = await this.#view.getPurchaseAmount();

    return this.#lottoService.sellLottos(purchaseAmount);
  }
}

export default LottoController;
