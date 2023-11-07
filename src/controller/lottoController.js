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
    return this.printResult(userLottoQuanitiy);
  }

  printResult(userLottoQuanitiy) {
    OutputView.printUserLottoQuanitiy(userLottoQuanitiy);
    OutputView.printLottoList(this.#user);
  }

  async readLottoNumber() {
    const LottoNumber = await InputView.inputLotto();
    this.readBonusNumber(LottoNumber);
  }

  async readBonusNumber(LottoNumber) {
    const bonusNumber = await InputView.inputLottoBonus();
    await this.handleLotto(LottoNumber, bonusNumber);
  }

  handleLotto(LottoNumber, bonusNumber) {}
}

export default LottoController;
