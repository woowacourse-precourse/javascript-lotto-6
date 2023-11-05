import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
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

  printResults() {
    Console.print('당첨 통계\n---');
    Console.print(
      `3개 일치 (${PRIZE.three.toLocaleString('ko-KR')}원) - ${
        this.#results[PRIZE.three]
      }개`
    );
    Console.print(
      `4개 일치 (${PRIZE.four.toLocaleString('ko-KR')}원) - ${
        this.#results[PRIZE.four]
      }개`
    );
    Console.print(
      `5개 일치 (${PRIZE.five.toLocaleString('ko-KR')}원) - ${
        this.#results[PRIZE.five]
      }개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZE.fivePlus.toLocaleString(
        'ko-KR'
      )}원) - ${this.#results[PRIZE.fivePlus]}개`
    );
    Console.print(
      `6개 일치 (${PRIZE.six.toLocaleString('ko-KR')}원) - ${
        this.#results[PRIZE.six]
      }개`
    );
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

    this.printResults();

    const returnRate = this.calcReturn(price);
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default App;
