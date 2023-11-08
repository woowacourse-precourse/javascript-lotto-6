import { Messages } from "../Messages.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import LottoModel from "../model/LottoModel.js";

class LottoController {
  #inputView = new InputView();
  #outputView = new OutputView();
  #lottoModel;

  async play() {
    try {
      await this.setPrice();
      const [price, count, lottos] = this.#lottoModel.generateLottos();
      this.#outputView.printLottos(count, lottos);

      await this.setLottoNumbers();
      await this.setBonusNumber();

      const [result, income] = this.#lottoModel.checkNumbers();
      this.#outputView.printResult(price, result, income);
    } catch ({ message }) {
      this.#outputView.print(message);
    }
  }

  async setPrice() {
    const input = await this.#inputView.read(Messages.ENTER_PURCHASE_AMOUNT);
    try {
      this.#lottoModel = new LottoModel(parseInt(input, 10));
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setPrice();
    }
  }

  async setLottoNumbers() {
    const input = await this.#inputView.read(Messages.ENTER_WINNING_NUMBERS);
    try {
      this.#lottoModel.setLottoNumbers(input.split(","));
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setLottoNumbers();
    }
  }

  async setBonusNumber() {
    const input = await this.#inputView.read(Messages.ENTER_BONUS_NUMBER);
    try {
      this.#lottoModel.setBonusNumber(input);
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setBonusNumber();
    }
  }
}

export default LottoController;
