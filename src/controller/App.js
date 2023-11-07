import Inputview from "../views/Inputview.js";
import Outputview from "../views/Outputview.js";
import Lotto from "../models/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

class App {
  #inputview
  #outputview

  constructor() {
    this.#inputview = new Inputview();
    this.#outputview = new Outputview();
  }

  static generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNumbers);
    return lotto.getNumbers();
  }

  static generateLottoList(count) { 
    let lottolist = [];
    for (let i = 0; i < count; i++) {
      lottolist.push(this.generateLottoNumbers());
    }
    return lottolist;
  }

  async play() {
    const count = await this.#inputview.readAmount();
    const lottolist = App.generateLottoList(count);
    this.#outputview.printLottoNumbers(count, lottolist);

    const winningnumbers = await this.#inputview.readWinningNumbers();
    const bonusNumber = await this.#inputview.readBonusNumber(winningnumbers.getNumbers());
    const matchCounts = winningnumbers.checkMatch(lottolist, bonusNumber);

    this.#outputview.printWinningStatistics(matchCounts);
    this.#outputview.printEarningRate(matchCounts, count * 1000);
  }
}

export default App;