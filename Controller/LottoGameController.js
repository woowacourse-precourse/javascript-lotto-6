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
    console.log(userMoney);
    this.#lottoList = this.#lottoMachine.buyLotto(userMoney);
  }

  printLottos() {}

  makeWinningLotto() {}

  printGameResult() {}
}

export default LottoGameController;
