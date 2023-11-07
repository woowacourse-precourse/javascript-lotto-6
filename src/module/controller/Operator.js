import LottoGenerator from "../model/LottoGenerator.js";
import WinNumber from "../model/WinNumber.js";
import WinnerDecider from "../model/WinnerDecider.js";

class Operator {
  #LG;
  #WN;
  #WD;
  #lottoList;
  #score;

  doLottoGenerator(count) {
    this.#LG = new LottoGenerator(count);
    this.#lottoList = this.#LG.lottoList;
  }

  doWinnerDecider(numbers, bonus) {
    this.#WN = new WinNumber(numbers, bonus);
    this.#WD = new WinnerDecider(this.#WN, this.#LG);
    this.#score = this.#WD.score;
  }

  get lottoList() {
    return this.#lottoList;
  }

  get score() {
    return this.#score;
  }
}

export default Operator;
