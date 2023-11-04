import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import Sort from "../utils/calc/Sort.js";
import { STATIC_NUMBER } from "../static/Static.js";
class LottoController {
  #lottos = [];
  #purchaseQty;

  async playGame() {
    await this.setPurchaseQty();
    this.showPurchaseQuantity();
    this.setLottos();
    this.showLottos();
  }

  async setPurchaseQty() {
    this.#purchaseQty = await InputView.readPurchasePrice();
  }

  showPurchaseQuantity() {
    OutputView.printPurchaseQuantity(this.#purchaseQty);
  }

  makeRandomNumArr() {
    const randomNumArr = [];
    do {
      const uniqueNum = RandomNumGenerator.generateRandomNum();
      if (!randomNumArr.includes(uniqueNum)) {
        randomNumArr.push(uniqueNum);
      }
    } while (randomNumArr.length < STATIC_NUMBER.LottoNumLen);
    return randomNumArr;
  }

  setLottos() {
    for (let i = 0; i < this.#purchaseQty; i++) {
      const randomNumArr = this.makeRandomNumArr();
      this.#lottos.push(randomNumArr);
    }
  }

  showLottos() {
    this.#lottos.map((lotto) => {
      Sort.sortNumArrASC(lotto);
      OutputView.printLotto(lotto);
    });
  }
}

export default LottoController;
