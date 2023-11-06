class LottoGameController {
  #lottoService;

  #winningService;

  #inputview;

  #outputview;

  #lottoList;

  constructor({ lottoService, winningService, inputview, outputview }) {
    this.#lottoService = lottoService;
    this.#winningService = winningService;
    this.#inputview = inputview;
    this.#outputview = outputview;
  }

  startGame() {
    this.readMoney();
    this.printLottos();
    this.printGameResult();
  }

  readMoney() {}

  printLottos() {}

  makeWinningLotto() {}

  printGameResult() {}
}

export default LottoGameController;
