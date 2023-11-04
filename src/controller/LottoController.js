import MESSAGES from "../constants/messages";
import LottoModel from "../model/LottoModel";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";

class LottoController {
  #inputView = new InputView();
  #outputView = new OutputView();
  #lottoModel;

  async play() {
    await this.setPrice();
    const [price, count, lottos] = this.#lottoModel.buyLottos();
    this.#outputView.printLottos(count, lottos);

    await this.setTargetNumbers();
    await this.setBonusNumber();
    const [result, income] = this.#lottoModel.checkNumbers();
    this.#outputView.printResult(price, result, income);
  }

  async setPrice() {
    const input = await this.#inputView.read(MESSAGES.read.buyPrice);
    try {
      this.#lottoModel = new LottoModel(input);
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setPriceInfo();
    }
  }

  async setTargetNumbers() {
    const input = await this.#inputView.read(MESSAGES.read.targetNumber);
    try {
      this.#lottoModel.setTargetNumbers(input.split(","));
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setTargetNumbers();
    }
  }

  async setBonusNumber() {
    const input = this.#inputView.read(MESSAGES.read.bonusNumber);
    try {
      this.#lottoModel.setBonusNumber(input);
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setBonusNumber();
    }
  }
}

export default LottoController;
