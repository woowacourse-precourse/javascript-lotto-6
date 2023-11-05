import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  #count;

  #lottos;

  constructor() {
    this.#count = 0;
    this.#lottos = [];
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

    const numbers = await Input.getLottoNumber();
    Console.print('');

    const bonusNumber = await Input.getLottoBonusNumber();
    Console.print('');
  }
}

export default App;
