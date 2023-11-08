class LottoController {
  #view;

  #lottoService;

  constructor({ view, lottoService }) {
    this.#view = view;
    this.#lottoService = lottoService;
  }

  async startGame() {
    const [lottos, quantitiy] = await this.#purchaseLottos;
    this.#view.returnPurchaseLottos(lottos, quantitiy);
    this.#winningLotto();
  }

  async #purchaseLottos() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    return this.#lottoService.sellLottos(purchaseAmount);
  }

  async #winningLotto() {
    const winningNumbers = await this.#view.getWinnigNumbers;
    const bonusNumber = await this.#view.getBonusNumber;
    return this.#lottoService.getWinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoController;
