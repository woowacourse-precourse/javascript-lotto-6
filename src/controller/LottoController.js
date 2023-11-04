import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import { STATIC_NUMBER } from "../static/Static.js";
class LottoController {
  #lottos = [];
  #quantity;

  async playGame() {
    await this.askPurchasePrice();
    this.showPurchaseQuantity();
    this.setLottos();
  }

  async askPurchasePrice() {
    this.#quantity = await InputView.readPurchasePrice();
  }

  showPurchaseQuantity() {
    OutputView.printPurchaseQuantity(this.#quantity);
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

  setLottos() {
    for (let i = 0; i < this.#quantity; i++) {
      const candidateNumArr = this.makeRandomNumArr();
      this.#lottos.push(candidateNumArr);
    }
  }
}

export default LottoController;
