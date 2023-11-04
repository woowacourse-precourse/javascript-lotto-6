import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import { STATIC_NUMBER } from "../static/Static.js";
class LottoController {
  #lottos = [];
  #quantity;

  async playGame() {
    await this.inputPurchasePrice();
    this.outputPurchaseQuantity();
    this.setLottos();
  }

  async inputPurchasePrice() {
    this.#quantity = await InputView.readPurchasePrice();
  }

  outputPurchaseQuantity() {
    OutputView.printPurchaseQuantity(this.#quantity);
  }

  setLottos() {
    for (let i = 0; i < this.#quantity; i++) {
      const candidateNumArr = this.makeRandomNumArr();
      this.#lottos.push(candidateNumArr);
    }
  }

  makeRandomNumArr() {
    const randomNumArr = [];
    do {
      const uniqueNum = RandomNumGenerator.generateRandomNum();
      if (!(uniqueNum in randomNumArr)) {
        randomNumArr.push(uniqueNum);
      }
    } while (randomNumArr.length < STATIC_NUMBER.LottoNumLen);
    return randomNumArr;
  }
}

export default LottoController;
