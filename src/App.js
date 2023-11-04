import { Console } from '@woowacourse/mission-utils';
import Cash from './Cash.js';
import Lotto from './Lotto.js';
import { generateLottoNumbers } from './utils.js';

class App {
  #cash;
  #lottoCount;
  #lottoEntries;
  #winNumbers;
  #bonus;

  constructor() {
    this.#lottoCount = 0;
    this.#lottoEntries = new Map();
  }

  async #initCash() {
    try {
      const cashInput = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );

      const cash = new Cash(cashInput);
      this.#cash = cash.get();
    } catch (error) {
      Console.print(error.message);
      this.play();
    }
  }

  async #initLotto() {
    if (!this.#cash) return;

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

  async #initWinNunmbers() {
    if (!this.#cash) return;

    try {
      const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      const winNumbers = new Lotto(input.split(',').map(Number)).getNumbers();
      if (this.#lottoEntries.has([...winNumbers].map(String).join(''))) {
        this.#initWinNunmbers();
      }

      this.#winNumbers = winNumbers;
      await this.#initBonusNumber();
    } catch (error) {
      Console.print(error.message);
      this.#initWinNunmbers();
    }
  }

  async #initBonusNumber() {
    if (!this.#winNumbers) return;

    try {
      const input = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n'
      );

      if (this.#winNumbers.includes(Number(input))) {
        throw new Error(
          '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.'
        );
      }
      if (!Number.isInteger(Number(input))) {
        throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
      }

      if (Number(input) < 1 || Number(input) > 45) {
        throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.');
      }

      this.#bonus = Number(input);
    } catch (error) {
      Console.print(error.message);
      this.#initBonusNumber();
    }
  }

  async play() {
    await this.#initCash();
    await this.#initLotto();
    this.printLottoList();
    await this.#initWinNunmbers();
  }
}

export default App;
