import User from "../User";
import InputView from "../views/inputView";
import OutputView from "../views/outputView";

class LottoController {
  #user;

  async play() {
    await this.readUserPayment();
  }

  async readUserPayment() {
    const payment = await InputView.inputPayment();
    this.creatUserObject(payment);
  }

  creatUserObject(payment) {
    this.#user = new User(payment);
    return this.printResult(payment);
  }

  printResult(payment) {
    OutputView.printUserLottoQuanitiy(payment);
  }
}

export default LottoController;
