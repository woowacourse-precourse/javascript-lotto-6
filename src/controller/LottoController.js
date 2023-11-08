import MESSAGES from "../constants/messages";
import LottoGame from "../domain/LottoGame";
import InputView from "../views/InputView";
import OutputView from "../views/OutputView";

class LottoController {
  #inputView = new InputView();
  #outputView = new OutputView();
  #lottoGame;

  async play() {
    await this.setPrice();
    const [price, count, lottos] = this.#lottoGame.buyLottos();
    this.#outputView.printLottos(count, lottos);

    await this.setTargetNumbers();
    await this.setBonusNumber();
    const [result, income] = this.#lottoGame.checkNumbers();
    this.#outputView.printResult(price, result, income);
  }

  async setPrice() {
    const input = await this.#inputView.read(MESSAGES.read.buyPrice);
    try {
      this.#lottoGame = new LottoGame(input);
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setPriceInfo();
    }
  }

  async setTargetNumbers() {
    const input = await this.#inputView.read(MESSAGES.read.targetNumber);
    try {
      this.#lottoGame.setTargetNumbers(input.split(","));
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setTargetNumbers();
    }
  }

  async setBonusNumber() {
    const input = this.#inputView.read(MESSAGES.read.bonusNumber);
    try {
      this.#lottoGame.setBonusNumber(input);
    } catch ({ message }) {
      this.#outputView.print(message);
      await this.setBonusNumber();
    }
  }
}

export default LottoController;
