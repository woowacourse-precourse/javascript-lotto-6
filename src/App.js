import { Console } from '@woowacourse/mission-utils';
import Cash from './domain/Cash.js';
import Lotto from './domain/Lotto.js';
import { generateRandomNumbers, getMatchCount } from './utils.js';
import Bonus from './domain/Bonus.js';
import { ERROR, INQUIRY, OUTPUT } from './messages.js';
import {
  CASH,
  LOTTO,
  MATCH,
  TOTAL_REWARD,
  UTILITY,
  rewardCountMap,
  rewardMessageMap,
} from './data.js';

class App {
  #cash;
  #lottoList;
  #winningNumbers;
  #bonus;
  #totalRewards;
  #matchCounter;

  constructor() {
    this.#lottoList = [];
    this.#totalRewards = TOTAL_REWARD.INITIAL_REWARD;
    this.#matchCounter = {
      [MATCH.FIRST_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.SECOND_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.THIRD_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.FOURTH_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.FIFTH_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
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

  async #generateLottoNumbers() {
    const lottoCount = this.#cash / CASH.UNIT;
    Console.print(OUTPUT.BUY_LOTTO(lottoCount));
    this.#fillLottoNumbers(lottoCount);
    this.#printLottoNumbers();
  }

  #fillLottoNumbers(lottoCount) {
    while (this.#lottoList.length < lottoCount) {
      const randomNumbers = generateRandomNumbers(LOTTO.COUNT_OF_NUMBERS);
      this.#lottoList.push(new Lotto(randomNumbers));
    }
  }

  #printLottoNumbers() {
    this.#lottoList.forEach((lotto) => {
      Console.print(
        JSON.stringify(lotto.getLottoNumbers()).replace(
          /,/g,
          UTILITY.JOIN_SEPERATOR
        )
      );
    });

    Console.print(UTILITY.EMPTY);
    this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INQUIRY.WINNING_NUMBERS);
      const inputNumbers = input
        .split(UTILITY.SPLIT_SEPERATOR)
        .map((value) => Number(value));
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

  #printResult() {
    this.#setMatchCounter();
    this.#setTotalRewards();
    Console.print(OUTPUT.RESULT);

    [...rewardMessageMap.entries()].forEach((entry) => {
      const [key, message] = entry;
      Console.print(`${message}${this.#matchCounter[key]}개`);
    });

    const profit = (
      (this.#totalRewards * UTILITY.PERCENT) /
      this.#cash
    ).toFixed(UTILITY.FIXED_DIGITS);
    Console.print(OUTPUT.PROFIT(profit));
  }

  #setMatchCounter() {
    this.#lottoList.forEach((lotto) => {
      const match = getMatchCount(
        lotto.getLottoNumbers(),
        this.#winningNumbers,
        this.#bonus
      );

      this.#matchCounter[match] += MATCH.UNIT;
    });
  }

  #setTotalRewards() {
    [...rewardCountMap.entries()].forEach((entry) => {
      const [count, reward] = entry;
      this.#totalRewards += reward * this.#matchCounter[count];
    });
  }

  async play() {
    await this.#buyLotto();
  }
}

export default App;
