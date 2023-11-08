import { Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Print from './Print.js';
import Lotto from './Lotto.js';

import PRIZE from './constants/Prize.js';

class App {
  #count;

  #lottos;

  #results;

  #answer;

  #bonus;

  #price;

  constructor() {
    this.#count = 0;
    this.#lottos = [];
    this.#results = {
      [PRIZE.three]: 0,
      [PRIZE.four]: 0,
      [PRIZE.five]: 0,
      [PRIZE.fivePlus]: 0,
      [PRIZE.six]: 0,
    };
    this.#answer = [];
    this.#bonus = 0;
    this.#price = 0;
  }

  #countLotto(price) {
    return price / 1000;
  }

  #createLotto() {
    const lottos = [];
    for (let i = 0; i < this.#count; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  }

  #updateResult(answer, bonus) {
    this.#lottos.forEach((lotto) => {
      const result = new Lotto(lotto);
      const key = result.compareLotto(answer, bonus);
      if (key) {
        this.#results[key] += 1;
      }
    });
  }

  #calcReturn(purchase) {
    const prize = Object.keys(this.#results).reduce(
      (total, key) => total + this.#results[key] * key,
      0
    );
    return ((prize / purchase) * 100).toFixed(1);
  }

  async buyLotto() {
    this.#price = await Input.getLottoPrice();
    Print.printNewLine();

    this.#count = this.#countLotto(this.#price);
    Print.printPurchase(this.#count);

    this.#lottos = this.#createLotto();
    this.#lottos.forEach((lotto) => Print.printArray(lotto));
    Print.printNewLine();
  }

  async createLottoAnswer() {
    this.#answer = await Input.getLottoNumber();
    Print.printNewLine();

    this.#bonus = await Input.getLottoBonusNumber(this.#answer);
    Print.printNewLine();
  }

  drawLotto() {
    this.#updateResult(this.#answer, this.#bonus);
    Print.printResults(this.#results);

    const returnRate = this.#calcReturn(this.#price);
    Print.printReturnRate(returnRate);
  }

  async play() {
    await this.buyLotto();
    await this.createLottoAnswer();
    this.drawLotto();
  }
}

export default App;
