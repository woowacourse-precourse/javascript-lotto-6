import { Console } from '@woowacourse/mission-utils';
import Cash from './Cash.js';
import Lotto from './Lotto.js';
import { generateLottoNumbers } from './utils.js';

class App {
  #cash;
  #lottoCount;
  #lottoEntries;
  #isInit;

  constructor() {
    this.#cash = 0;
    this.#lottoCount = 0;
    this.#lottoEntries = new Map();

    this.#isInit = true;
  }

  async #cashInit() {
    try {
      const cashInput = await Console.readLineAsync(
        `구입금액을 입력해 주세요.${this.#isInit ? '\n' : ''}`
      );

      this.#isInit = false;

      const cash = new Cash(cashInput);
      this.#cash = cash.get();
    } catch (error) {
      Console.print(error.message);
      this.play();
    }
  }

  async #lottoInit() {
    if (this.#cash <= 0) return;

    this.#lottoCount = this.#cash / 1000;
    Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);

    while (this.#lottoEntries.size < this.#lottoCount) {
      const randomNumbers = generateLottoNumbers();
      const id = randomNumbers.join('');

      if (!this.#lottoEntries.has(id)) {
        this.#lottoEntries.set(id, new Lotto(randomNumbers));
      }
    }
  }

  printLottoList() {
    for (const value of this.#lottoEntries.values()) {
      Console.print(value.getNumbers());
    }
    Console.print('');
  }

  async play() {
    await this.#cashInit();
    await this.#lottoInit();
    this.printLottoList();
  }
}

export default App;
