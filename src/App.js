import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  #count;

  constructor() {
    this.#count = 0;
  }

  countLotto(price) {
    return price / 1000;
  }

  async play() {
    const price = await Input.getLottoPrice();
    this.#count = this.countLotto(price);
    Console.print(`${this.#count}개를 구매했습니다.`);
  }
}

export default App;
