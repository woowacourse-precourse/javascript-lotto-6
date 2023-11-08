import randomLotto from './utils/randomLotto.js';

export default class MyLotto {
  #lottoCount;

  #quickPicks;

  constructor() {
    this.#quickPicks = [];
  }

  setlottoCount(input) {
    this.#lottoCount = Number(input.slice(0, -3));

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
