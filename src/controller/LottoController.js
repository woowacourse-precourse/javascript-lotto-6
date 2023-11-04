import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import Sort from "../utils/calc/Sort.js";
import { SEPARATOR, STATIC_NUMBER, RANK } from "../static/Static.js";
class LottoController {
  #lottoList = [];
  #purchaseQty;
  #winningNums = [];
  #bonusNum;
  #winningStatistic;

  constructor() {
    this.#winningStatistic = {
      [RANK.fifth]: 0,
      [RANK.fourth]: 0,
      [RANK.third]: 0,
      [RANK.second]: 0,
      [RANK.first]: 0,
    };
  }

  async playGame() {
    await this.setPurchaseQty();
    this.showPurchaseQuantity();
    this.setLottoList();
    this.showLottoList();
    await this.setWinningNums();
    await this.setBonusNum();
    this.checkLottoList();
    this.showResult();
    this.showRateOfReturn();
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

  setLottoList() {
    for (let i = 0; i < this.#purchaseQty; i++) {
      const randomNumArr = this.makeRandomNumArr();
      this.#lottoList.push(randomNumArr);
    }
  }

  showLottoList() {
    this.#lottoList.map((lotto) => {
      Sort.sortNumArrASC(lotto);
      OutputView.printLotto(lotto);
    });
  }

  async setWinningNums() {
    const winningNumsString = await InputView.readWinningNums();
    const winningNumsArr = winningNumsString.split(SEPARATOR.lottoNum);
    this.#winningNums = winningNumsArr.map((winningNum) => Number(winningNum));
  }

  async setBonusNum() {
    const bonusNum = await InputView.readBonusNum();
    this.#bonusNum = Number(bonusNum);
  }

  checkLottoList() {
    this.#lottoList.map((lottoNums) => {
      const lotto = new Lotto(lottoNums);
      const rank = lotto.checkResult(this.#winningNums, this.#bonusNum);
      if (rank) {
        this.setWinningStatistic(rank);
      }
    });
  }

  setWinningStatistic(rank) {
    this.#winningStatistic[rank] += 1;
  }

  showResult() {
    OutputView.printResult(this.#winningStatistic);
  }

  showRateOfReturn() {}
}

export default LottoController;
