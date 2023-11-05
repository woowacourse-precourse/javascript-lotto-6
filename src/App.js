import { Console } from '@woowacourse/mission-utils';
import Cash from './objects/Cash.js';
import Lotto from './objects/Lotto.js';
import { generateRandomNumbers, getMatchCount } from './utils.js';
import Bonus from './objects/Bonus.js';
import { ERROR, INQUIRY, OUTPUT } from './messages.js';
import { rewardCountMap, rewardMessageMap } from './data.js';

class App {
  #cash;
  #lottoEntries;
  #winningNumbers;
  #bonus;
  #totalRewards;
  #matchCounter;

  constructor() {
    this.#lottoEntries = new Map();
    this.#totalRewards = 0;
    this.#matchCounter = {
      6: 0,
      '5 + 1': 0,
      5: 0,
      4: 0,
      3: 0,
    };
  }

  async #buyLotto() {
    try {
      const input = await Console.readLineAsync(INQUIRY.CASH);
      const cash = new Cash(input);
      this.#cash = cash.getValue();

      await this.#generateLottoNumbers();
    } catch (error) {
      Console.print(error.message);
      await this.#buyLotto();
    }
  }

  #fillLottoNumbers(lottoCount) {
    while (this.#lottoEntries.size < lottoCount) {
      const randomNumbers = generateRandomNumbers(6);
      const id = randomNumbers.join('');

      if (!this.#lottoEntries.has(id)) {
        this.#lottoEntries.set(id, new Lotto(randomNumbers));
      }
    }
  }

  async #generateLottoNumbers() {
    const lottoCount = this.#cash / 1000;
    Console.print(OUTPUT.BUY_LOTTO(lottoCount));
    this.#fillLottoNumbers(lottoCount);
    this.#printLottoNumbers();
  }

  #printLottoNumbers() {
    for (const lotto of this.#lottoEntries.values()) {
      Console.print(
        JSON.stringify(lotto.getLottoNumbers()).replace(/,/g, ', ')
      );
    }

    Console.print('');
    this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INQUIRY.WINNING_NUMBERS);
      const inputNumbers = input.split(',').map((value) => Number(value));
      const winningNumbers = new Lotto(inputNumbers);

      this.#winningNumbers = winningNumbers.getLottoNumbers();
      await this.#inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
      await this.#inputWinningNumbers();
    }
  }

  async #inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(INQUIRY.BONUS_NUMBER);
      const bonus = new Bonus(Number(input));

      if (this.#winningNumbers.includes(bonus.getValue())) {
        throw new Error(ERROR.BONUS_NUMBER.DUPLICATED);
      }

      this.#bonus = bonus.getValue();
      this.#printResult();
    } catch (error) {
      Console.print(error.message);
      await this.#inputBonusNumber();
    }
  }

  #setMatchCounter() {
    for (const lotto of this.#lottoEntries.values()) {
      const match = getMatchCount(lotto, this.#winningNumbers, this.#bonus);
      this.#matchCounter[match] += 1;
    }
  }

  #setTotalRewards() {
    for (const [count, reward] of rewardCountMap) {
      this.#totalRewards += reward * this.#matchCounter[count];
    }
  }

  #printResult() {
    this.#setMatchCounter();
    this.#setTotalRewards();

    Console.print(OUTPUT.RESULT);
    for (const [key, message] of rewardMessageMap) {
      Console.print(`${message}${this.#matchCounter[key]}개`);
    }

    const profit = ((this.#totalRewards * 100) / this.#cash).toFixed(1);
    Console.print(OUTPUT.PROFIT(profit));
  }

  async play() {
    await this.#buyLotto();
  }
}

export default App;
