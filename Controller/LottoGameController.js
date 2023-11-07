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

  async makeWinningLotto() {
    // input받기
    const winningLottoNumber = await this.#inputview.readWinningLottoNumber();
    const bonusNumber = await this.#inputview.readBonusNumber();
    // const winningLotto = new WinningLotto(winningLottoNumber, bonusNumber);
  }

  async printGameResult() {
    await this.makeWinningLotto();
  }
}

export default LottoGameController;
