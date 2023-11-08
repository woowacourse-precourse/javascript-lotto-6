import User from "../User";
import WORD from "../lib/constants/word";
import InputView from "../views/inputView";
import OutputView from "../views/outputView";

class LottoController {
  #user;

  async play() {
    await this.readUserPayment();
    await this.readLottoNumber();
  }

  async readUserPayment() {
    const payment = await InputView.inputPayment();
    const userLottoQuanitiy = payment / WORD.LOTTOPRICE;
    this.creatUserObject(userLottoQuanitiy);
  }

  creatUserObject(userLottoQuanitiy) {
    this.#user = new User(userLottoQuanitiy);
    this.printUserLottoQuanitiy(userLottoQuanitiy);
  }

  printUserLottoQuanitiy(userLottoQuanitiy) {
    OutputView.printUserLottoQuanitiy(userLottoQuanitiy);
    OutputView.printLottoList(this.#user);
  }

  async readLottoNumber() {
    const lottoNumber = await InputView.inputLotto();
    this.readBonusNumber(lottoNumber);
  }

  async readBonusNumber(lottoNumber) {
    const bonusNumber = await InputView.inputLottoBonus();
    await this.handleLotto(lottoNumber, bonusNumber);
  }

  handleLotto(lottoNumber, bonusNumber) {
    this.raffleLotto(lottoNumber, bonusNumber);
  }

  raffleLotto(lottoNumber, bonusNumber) {
    this.#user.getRank(lottoNumber, bonusNumber);
    this.printResult();
  }

  printResult() {
    OutputView.printRaffleStatistic(this.#user.printStatisticList());
    OutputView.printProfit(this.#user.calculateProfitRate());
  }
}

export default LottoController;
