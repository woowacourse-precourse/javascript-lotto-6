import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Print from './Print.js';
import Lotto from './Lotto.js';

import PRIZE from './constants/Prize.js';

class App {
  #count;

  #lottos;

  #results;

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
  }

  countLotto(price) {
    return price / 1000;
  }

  createLotto() {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

    lotto.sort((a, b) => a - b);
    return lotto;
  }

  calcReturn(purchase) {
    let prize = 0;
    for (const key in this.#results) {
      prize += this.#results[key] * key;
    }
    return ((prize / purchase) * 100).toFixed(1);
  }

  async play() {
    const price = await Input.getLottoPrice();
    Console.print('');

    this.#count = this.countLotto(price);
    Console.print(`${this.#count}개를 구매했습니다.`);

    for (let i = 0; i < this.#count; i++) {
      const lotto = this.createLotto();
      this.#lottos.push(lotto);
      Console.print(`[${lotto.join(', ')}]`);
    }
    Console.print('');

    const answerNumbers = await Input.getLottoNumber();
    Console.print('');

    const bonusNumber = await Input.getLottoBonusNumber(answerNumbers);
    Console.print('');

    this.#lottos.forEach((lotto) => {
      const result = new Lotto(lotto);
      const key = result.compareLotto(answerNumbers, bonusNumber);
      if (key) {
        this.#results[key] += 1;
      }
    });

    Print.printResults(this.#results);

    const returnRate = this.calcReturn(price);
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default App;
