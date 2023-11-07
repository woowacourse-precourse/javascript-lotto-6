import User from "../User";
import WORD from "../lib/constants/word";
import InputView from "../views/inputView";
import OutputView from "../views/outputView";

class LottoController {
  #user;

  async play() {
    await this.readUserPayment();
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
}

export default LottoController;
