class LottoGameController {
  #lottoMachine;

  #winningJudge;

  #inputview;

  #outputview;

  #lottoList;

  constructor({ LottoMachine, WinningJudge, inputview, outputview }) {
    this.#lottoMachine = LottoMachine;
    this.#winningJudge = WinningJudge;
    this.#inputview = inputview;
    this.#outputview = outputview;
  }

  async startGame() {
    await this.readMoney();
    this.printLottos();
    this.printGameResult();
  }

  async readMoney() {
    const userMoney = await this.#inputview.readMoney();
    this.#lottoList = this.#lottoMachine.buyLotto(userMoney);
  }

  printLottos() {
    this.#outputview.printAllLottos(this.#lottoList);
  }

  makeWinningLotto() {
    // input받기
    const winningLottoNumber = this.#inputview.readWinningLottoNumber();
    const bonusNumber = this.#inputview.readBonusNumber();
    const winningLotto = new WinningLotto(winningLottoNumber, bonusNumber);
  }

  printGameResult() {}
}

export default LottoGameController;
