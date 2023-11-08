import randomLotto from './utils/randomLotto.js';
import winResult from './utils/winResult.js';
import { MONEYSET } from '../Constant/SETTING.js';

export default class MyLotto {
  #lottoCount;

  #quickPicks;

  #winCountArr;

  #winResultArr;

  constructor() {
    this.#quickPicks = [];
    this.#winCountArr = [];
  }

  setLottoCount(input) {
    this.#lottoCount = Number(input.slice(MONEYSET.moneySlice.start, MONEYSET.moneySlice.end));
  }

  setQuickPicks() {
    while (this.#quickPicks.length < this.#lottoCount) {
      this.#quickPicks.push(randomLotto());
    }
  }

  setWinCount(winCount) {
    this.#winCountArr.push(winCount);
  }

  setWinResult() {
    this.#winResultArr = winResult(this.#winCountArr);
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getQuickPicks() {
    return this.#quickPicks;
  }

  getWinCountArr() {
    return this.#winCountArr;
  }

  getWinResultArr() {
    return this.#winResultArr;
  }
}
