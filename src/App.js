import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Lotto from './Lotto.js';
import PRICE from './constants/price.js';

class App {
  #count;

  #lottos;

  #results;

  constructor() {
    this.#count = 0;
    this.#lottos = [];
    this.#results = {
      [PRICE.three]: 0,
      [PRICE.four]: 0,
      [PRICE.five]: 0,
      [PRICE.fivePlus]: 0,
      [PRICE.six]: 0,
    };
  }

  countLotto(price) {
    return price / 1000;
  }

  createLotto() {
    const lotto = [];
    while (lotto.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!lotto.includes(number)) {
        lotto.push(number);
      }
    }
    lotto.sort((a, b) => a - b);
    return lotto;
  }

  printResults() {
    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (${PRICE.three}원) - ${this.#results[PRICE.three]}개`
    );
    Console.print(
      `4개 일치 (${PRICE.four}원) - ${this.#results[PRICE.four]}개`
    );
    Console.print(
      `5개 일치 (${PRICE.five}원) - ${this.#results[PRICE.five]}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRICE.fivePlus}원) - ${
        this.#results[PRICE.fivePlus]
      }개`
    );
    Console.print(`6개 일치 (${PRICE.six}원) - ${this.#results[PRICE.six]}개`);
  }

  async play() {
    const price = await Input.getLottoPrice();
    Console.print('');

    this.#count = this.countLotto(price);
    Console.print(`${this.#count}개를 구매했습니다.`);

    for (let i = 0; i < this.#count; i++) {
      const lotto = this.createLotto();
      this.#lottos.push(lotto);
    }
    this.#lottos.forEach((lotto) => Console.print(lotto));
    Console.print('');

    const answerNumbers = await Input.getLottoNumber();
    Console.print('');

    const bonusNumber = await Input.getLottoBonusNumber();
    Console.print('');

    this.#lottos.forEach((lotto) => {
      const result = new Lotto(lotto);
      const key = result.compareLotto(answerNumbers, bonusNumber);
      if (key) {
        this.#results[key] += 1;
      }
    });

    this.printResults();
  }
}

export default App;
