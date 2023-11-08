class LottoController {
  #view;

  #lottoService;

  #prizeService;

  constructor({ view, lottoService ,prizeService}) {
    this.#view = view;
    this.#lottoService = lottoService;
    this.#prizeService = prizeService
  }

  async startGame() {
    const [lottos, quantitiy] = await this.#purchaseLottos();
    this.#view.returnPurchaseLottos(lottos, quantitiy);
    const winningLotto = await this.#winningLotto();
    const [lottoResult, lottoROI] = this.#prizeService.prizeReward(lottos, winningLotto, quantitiy);
    this.#view.returnResult(lottoResult);
    this.#view.returnLottoROI(lottoROI);
  }


  async #purchaseLottos() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    return this.#lottoService.sellLotto(purchaseAmount);
  }

  async #winningLotto() {
    const winningNumbers = await this.#view.getWinnigNumbers();
    const bonusNumber = await this.#view.getBonusNumber();
    return this.#lottoService.getWinningLotto(winningNumbers, bonusNumber);
  }


}

export default LottoController;
