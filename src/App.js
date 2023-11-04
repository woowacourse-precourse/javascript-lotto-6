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
      this.printResult();
    } catch (error) {
      Console.print(error.message);
      this.#initBonusNumber();
    }
  }

  printResult() {
    const result = {
      6: 0,
      '5 + 1': 0,
      5: 0,
      4: 0,
      3: 0,
    };

    let totalReward = 0;

    for (const lotto of this.#lottoEntries.values()) {
      let match = 0;
      const numbers = lotto.getNumbers();

      for (const number of numbers) {
        if (this.#winNumbers.includes(number)) {
          match += 1;
        }

        if (match === 5 && numbers.includes(this.#bonus)) {
          match = '5 + 1';
        }
      }
      result[match] += 1;
    }

    totalReward +=
      5000 * result[3] +
      50000 * result[4] +
      1500000 * result[5] +
      30000000 * result['5 + 1'] +
      2000000000 * result[6];

    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result['5 + 1']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);
    Console.print(
      `총 수익률은 ${((totalReward * 100) / this.#cash).toFixed(1)}%입니다.`
    );
  }

  async play() {
    await this.#initCash();
    await this.#initLotto();
    this.printLottoList();
    await this.#initWinNunmbers();
  }
}

export default App;
