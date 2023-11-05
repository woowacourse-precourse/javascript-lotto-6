import { Console } from '@woowacourse/mission-utils';
import Cash from './objects/Cash.js';
import Lotto from './objects/Lotto.js';
import { generateRandomNumbers } from './utils.js';
import Bonus from './objects/Bonus.js';
import { ERROR, INQUIRY, OUTPUT } from './messages.js';

class App {
  #cash;
  #lottoEntries;
  #winNumbers;
  #bonus;

  constructor() {
    this.#lottoEntries = new Map();
  }

  async buyLotto() {
    try {
      const cashInput = await Console.readLineAsync(INQUIRY.CASH);

      const cash = new Cash(cashInput);
      this.#cash = cash.getValue();
      await this.#generateLottoNumbers();
    } catch (error) {
      Console.print(error.message);
      await this.play();
    }
  }

  async #generateLottoNumbers() {
    const lottoCount = this.#cash / 1000;
    Console.print(OUTPUT.BUY_LOTTO(lottoCount));

    while (this.#lottoEntries.size < lottoCount) {
      const randomNumbers = generateRandomNumbers(6);
      const id = randomNumbers.join('');

      if (!this.#lottoEntries.has(id)) {
        this.#lottoEntries.set(id, new Lotto(randomNumbers));
      }
    }

    this.#printLottoNumbers();
  }

  #printLottoNumbers() {
    for (const lotto of this.#lottoEntries.values()) {
      Console.print(lotto.getLottoNumbers());
    }

    Console.print('');
    this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INQUIRY.WINNING_NUMBERS);
      const inputNumbers = input.split(',').map((value) => Number(value));
      const winNumbers = new Lotto(inputNumbers);
      this.#winNumbers = winNumbers.getLottoNumbers();
      await this.#inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
      this.#inputWinningNumbers();
    }
  }

  async #inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(INQUIRY.BONUS_NUMBER);

      const bonus = new Bonus(Number(input));

      if (this.#winNumbers.includes(bonus.getValue())) {
        throw new Error(ERROR.BONUS_NUMBER.DUPLICATED);
      }

      this.#bonus = bonus.getValue();
      this.#printResult();
    } catch (error) {
      Console.print(error.message);
      this.#inputBonusNumber();
    }
  }

  #printResult() {
    const result = {
      6: 0,
      '5 + 1': 0,
      5: 0,
      4: 0,
      3: 0,
    };

    let totalReward = 0;

    // lotto is Lotto class
    for (const lotto of this.#lottoEntries.values()) {
      let match = 0;
      const lottoNumbers = lotto.getLottoNumbers();

      for (const number of lottoNumbers) {
        if (this.#winNumbers.includes(number)) {
          match += 1;
        }

        if (match === 5 && lottoNumbers.includes(this.#bonus)) {
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
    await this.buyLotto();
  }
}

export default App;
