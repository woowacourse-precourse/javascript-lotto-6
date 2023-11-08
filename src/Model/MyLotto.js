import randomLotto from './utils/randomLotto.js';
import { MONEYSET } from '../Constant/SETTING.js';

export default class MyLotto {
  #lottoCount;

  #quickPicks;

  constructor() {
    this.#quickPicks = [];
  }

  setLottoCount(input) {
    this.#lottoCount = Number(input.slice(MONEYSET.moneySlice.start, MONEYSET.moneySlice.end));

    return this.#setQuickPicks();
  }

  #setQuickPicks() {
    while (this.#quickPicks.length < this.#lottoCount) {
      this.#quickPicks.push(randomLotto());
    }
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getQuickPicks() {
    return this.#quickPicks;
  }
}
