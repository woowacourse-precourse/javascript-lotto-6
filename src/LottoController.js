class LottoController {
  #view;

  #lottoService;

  #prizeService;

  constructor({ view, lottoService ,prizeService}) {
    this.#view = view;
    this.#lottoService = lottoService;
    this.#prizeService = prizeService;
  }

  async startGame() {
    const [lottos, quantitiy] = await this.#purchaseLottos();
    await this.#view.returnPurchaseLottos(lottos, quantitiy);
    const winningLotto = await this.#winningLotto();
    const [lottoResult, lottoROI] = this.#prizeService.prizeReward(lottos, winningLotto, quantitiy);
    await this.#view.returnResult(lottoResult);
    await this.#view.returnLottoROI(lottoROI);
  }


  async #purchaseLottos() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    return this.#lottoService.sellLotto(purchaseAmount);
  }

  async #winningLotto() {
    let winningNumbers = await this.#view.getWinnigNumbers();
    if (typeof winningNumbers === 'string') {
      winningNumbers = winningNumbers.split(',').map(Number);
    }
    const bonusNumber = await this.#view.getBonusNumber();
    return this.#lottoService.getWinningLotto(winningNumbers, bonusNumber);
  }






}

export default LottoController;
