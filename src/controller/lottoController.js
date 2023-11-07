import InputView from "../views/inputView";

class LottoController {
  #user;

  async play() {
    await this.readUserPayment();
  }

  async readUserPayment() {
    const payment = await InputView.inputPayment();
  }
}

export default LottoController;
