import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import RandomNumGenerator from "../utils/calc/RandomNumGenerator.js";
import Sort from "../utils/calc/Sort.js";
import { RANK } from "../static/Static.js";
import Calculator from "../utils/calc/Calculator.js";
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
    this.showPurchaseQty();
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

  showPurchaseQty() {
    OutputView.printPurchaseQuantity(this.#purchaseQty);
  }

  makeRandomNumArr() {
    return RandomNumGenerator.generateRandomNumArr();
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
      const lottoString = this.convertToString(lotto);
      OutputView.printLotto(lottoString);
    });
  }

  convertToString(Arr) {
    return `[${Arr[0]}, ${Arr[1]}, ${Arr[2]}, ${Arr[3]}, ${Arr[4]}, ${Arr[5]}]`;
  }

  async setWinningNums() {
    const winningNums = await InputView.readWinningNums();
    this.#winningNums = winningNums.map((winningNum) => Number(winningNum));
  }

  async setBonusNum() {
    const bonusNum = await InputView.readBonusNum(this.#winningNums);
    this.#bonusNum = Number(bonusNum);
  }

  checkLottoList() {
    this.#lottoList.map((lottoNums) => {
      const lotto = new Lotto(lottoNums);
      const winnerLank = lotto.checkResult(this.#winningNums, this.#bonusNum);
      if (winnerLank) {
        this.setWinningStatistic(winnerLank);
      }
    });
  }

  setWinningStatistic(winnerLank) {
    this.#winningStatistic[winnerLank] += 1;
  }

  showResult() {
    OutputView.printResult(this.#winningStatistic);
  }

  showRateOfReturn() {
    const rateOfReturn = Calculator.calcRateOfReturn(
      this.#winningStatistic,
      this.#purchaseQty
    );
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default LottoController;
