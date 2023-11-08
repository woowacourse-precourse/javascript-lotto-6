import Outputview from "../views/Outputview.js";

class MatchController {
  #outputview;
  #count;
  #lottolist;
  #winningnumbers;
  #bonusNumber;

  constructor(count, lottolist, winningnumbers, bonusNumber) {
    this.#outputview = new Outputview();
    this.#count = count;
    this.#lottolist = lottolist;
    this.#winningnumbers = winningnumbers;
    this.#bonusNumber = bonusNumber;
  }

  async getMatchResult() {
    const matchCounts = await this.checkMatchCounts(this.#winningnumbers, this.#lottolist, this.#bonusNumber);
    this.printWinningResult(matchCounts, this.#count)
  }

  checkMatchCounts(winningnumbers, lottolist, bonusNumber) {
    return winningnumbers.checkMatch(lottolist, bonusNumber);
  }

  printWinningResult(matchCounts, count){
    this.#outputview.printWinningStatistics(matchCounts);
    this.#outputview.printEarningRate(matchCounts, count * 1000);
  }
}

export default MatchController;