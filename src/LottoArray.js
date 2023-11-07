import Lotto from './Lotto.js';
import RandomNumbers from './RandomNumbers.js';
import { LOTTO } from './constants/lottoGame.js';

class LottoArray {
  #lottoArray;

  constructor() {
    this.#lottoArray = [];
  }

  set(money) {
    while (this.#lottoArray.length < money / LOTTO.PRICE) {
      this.#createLotto();
    }
  }

  get() {
    return this.#lottoArray;
  }

  #createLotto() {
    const lotto = new Lotto(RandomNumbers.create());
    this.#lottoArray.push(lotto);
  }

  checkWinning(winningLotto, rank) {
    this.#lottoArray.forEach((lotto) => {
      const [count, hasBonus] = winningLotto.compareWith(lotto);
      rank.choose(count, hasBonus);
    });
  }

  calculateWinnings(rank) {
    const totalWinnings = rank.findTotalWinnings();
    const winningsRate =
      (totalWinnings / (this.#lottoArray.length * LOTTO.PRICE)) * 100;

    return winningsRate;
  }
}

export default LottoArray;
