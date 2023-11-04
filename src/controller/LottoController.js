import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import Sort from "../utils/calc/Sort.js";
import { SEPARATOR, STATIC_NUMBER } from "../static/Static.js";
class LottoController {
  #lottoArr = [];
  #purchaseQty;
  #winningNums = [];
  #bonusNum;

  async playGame() {
    await this.setPurchaseQty();
    this.showPurchaseQuantity();
    this.setLottos();
    this.showLottos();
    await this.setWinningNums();
    await this.setBonusNum();
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
      this.#lottoArr.push(randomNumArr);
    }
  }

  showLottos() {
    this.#lottoArr.map((lotto) => {
      Sort.sortNumArrASC(lotto);
      OutputView.printLotto(lotto);
    });
  }

  async setWinningNums() {
    const winningNums = await InputView.readWinningNums();
    this.#winningNums = winningNums
      .split(SEPARATOR.lottoNumSeparator)
      .map((winningNum) => Number(winningNum));
  }

  async setBonusNum() {
    this.#winningNums = await InputView.readBonusNum();
  }
}

export default LottoController;
