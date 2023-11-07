import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import { Console } from '@woowacourse/mission-utils';
import { ERROR, INQUIRY, OUTPUT } from '../messages.js';
import { generateRandomNumbers, getMatchCount } from '../utils.js';
import {
  LOTTO,
  MATCH,
  TOTAL_REWARD,
  UTILITY,
  rewardCountMap,
  rewardMessageMap,
} from '../data.js';

class Store {
  constructor() {
    this.lottoNumbersList = [];
    this.totalRewards = TOTAL_REWARD.INITIAL_REWARD;
    this.matchCounter = {
      [MATCH.FIRST_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.SECOND_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.THIRD_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.FOURTH_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
      [MATCH.FIFTH_REWARD_CONDITION]: MATCH.INITIAL_COUNT,
    };
  }

  async sellLotto({ count, cash }) {
    this.cash = cash;
    Console.print(OUTPUT.BUY_LOTTO({ count }));
    this.#generateLottoNumbers({ count });
    await this.#printLottoNumbers();
  }

  #generateLottoNumbers({ count }) {
    while (this.lottoNumbersList.length < count) {
      const randomNumbers = generateRandomNumbers(LOTTO.COUNT_OF_NUMBERS);
      this.lottoNumbersList.push(new Lotto(randomNumbers).getLottoNumbers());
    }
  }

  async #printLottoNumbers() {
    this.lottoNumbersList.forEach((lottoNumbers) => {
      Console.print(
        JSON.stringify(lottoNumbers).replace(/,/g, UTILITY.JOIN_SEPERATOR)
      );
    });

    Console.print(UTILITY.EMPTY);
    await this.#registerWinningNumbers();
  }

  async #registerWinningNumbers() {
    try {
      await this.#generateWinningNumbers();
      await this.#registerBonusNumber();
      this.#printResult();
    } catch (error) {
      Console.print(error.message);
      await this.#registerWinningNumbers();
    }
  }

  async #generateWinningNumbers() {
    const input = await Console.readLineAsync(INQUIRY.WINNING_NUMBERS);
    const inputNumbers = input
      .split(UTILITY.SPLIT_SEPERATOR)
      .map((value) => Number(value));
    this.winningNumbers = new Lotto(inputNumbers).getLottoNumbers();
  }

  async #registerBonusNumber() {
    try {
      const bonus = await this.#generateBonusNumber();
      this.bonusNumber = bonus.getValue();
    } catch (error) {
      Console.print(error);
      await this.registerBonusNumber();
    }
  }

  async #generateBonusNumber() {
    const input = await Console.readLineAsync(INQUIRY.BONUS_NUMBER);
    const bonus = new Bonus(Number(input));

    if (this.winningNumbers.includes(bonus.getValue())) {
      throw new Error(ERROR.BONUS_NUMBER.DUPLICATED);
    }

    return bonus;
  }

  #printResult() {
    this.#setMatchCounter();
    this.#setTotalRewards();
    Console.print(OUTPUT.RESULT);

    [...rewardMessageMap.entries()].forEach((entry) => {
      const [key, message] = entry;
      Console.print(`${message}${this.matchCounter[key]}개`);
    });

    const profit = ((this.totalRewards * UTILITY.PERCENT) / this.cash).toFixed(
      UTILITY.FIXED_DIGITS
    );
    Console.print(OUTPUT.PROFIT({ profit }));
  }

  #setMatchCounter() {
    this.lottoNumbersList.forEach((lottoNumbers) => {
      const match = getMatchCount({
        lottoNumbers,
        winningNumbers: this.winningNumbers,
        bonusNumber: this.bonusNumber,
      });

      this.matchCounter[match] += MATCH.UNIT;
    });
  }

  #setTotalRewards() {
    [...rewardCountMap.entries()].forEach((entry) => {
      const [count, reward] = entry;
      this.totalRewards += reward * this.matchCounter[count];
    });
  }
}

export default Store;
