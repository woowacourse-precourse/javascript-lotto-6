import { Console, Random } from '@woowacourse/mission-utils';

import CONSTANTS from './constants.js';

import Lotto from './Lotto.js';
import PurchaseAmount from './PurchaseAmount.js';
import WinningNumbers from './WinningNumbers.js';
import BonusNumber from './BonusNumber.js';

class App {
  async play() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const purchaseCount =
      purchaseAmount.getAmount() / CONSTANTS.NUMBERS.LOTTO_PRICE;

    const lottos = this.#buyLottos(purchaseCount);

    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber(
      winningNumbers.getValues(),
    );

    const result = this.#calculateResult(lottos, winningNumbers, bonusNumber);
    const rateOfReturn = this.#calculateRate(result, purchaseAmount);

    this.#printResult(result, rateOfReturn);
  }

  /**
   * @param {number} purchaseCount
   */
  #buyLottos(purchaseCount) {
    const lottos = [];

    for (let i = 0; i < purchaseCount; i++) {
      lottos.push(this.#makeLotto());
    }

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(lotto.toString()));

    return lottos;
  }

  #makeLotto() {
    const values = Random.pickUniqueNumbersInRange(
      CONSTANTS.NUMBERS.LOTTO_LOW_END,
      CONSTANTS.NUMBERS.LOTTO_HIGH_END,
      CONSTANTS.NUMBERS.LOTTO_COUNT,
    );

    return new Lotto(values);
  }

  /**
   * @param {Lotto[]} lottos
   * @param {WinningNumbers} winningNumbers
   * @param {BonusNumber} bonusNumber
   */
  #calculateResult(lottos, winningNumbers, bonusNumber) {
    const lottoResults = lottos.map(lotto =>
      lotto.checkResult(winningNumbers, bonusNumber),
    );

    const finalResult = [0, 0, 0, 0, 0, 0];
    lottoResults.forEach(value => finalResult[value]++);

    return finalResult;
  }

  /**
   * @param {number[]} result
   * @param {PurchaseAmount} purchaseAmount
   */
  #calculateRate(result, purchaseAmount) {
    const sum = this.#sumOfRewards(result);
    const average = sum / purchaseAmount.getAmount();

    return average;
  }

  /**
   * @param {number[]} result
   */
  #sumOfRewards(result) {
    const numbers = CONSTANTS.NUMBERS;
    const rewards = [
      numbers.FIRST_REWARD,
      numbers.SECOND_REWARD,
      numbers.THIRD_REWARD,
      numbers.FOURTH_REWARD,
      numbers.FIFTH_REWARD,
    ];

    let sum = 0;

    for (let i = 1; i < result.length; i++) {
      sum += rewards[i - 1] * result[i];
    }

    return sum;
  }

  /**
   * @param {number[]} result
   * @param {number} rateOfReturn
   */
  #printResult(result, rateOfReturn) {
    this.#printStatistics(result);

    const rate = (rateOfReturn * 100).toFixed(2);

    Console.print(`총 수익률은 ${Number.parseFloat(rate)}%입니다.`);
  }

  /**
   * @param {number[]} result
   */
  #printStatistics(result) {
    const rewards = this.#getRewardNums().map(n => n.toLocaleString());

    Console.print(CONSTANTS.MESSAGES.STATISTIC_MESSAGE);
    Console.print(`3개 일치 (${rewards[5]}원) - ${result[5]}개`);
    Console.print(`4개 일치 (${rewards[4]}원) - ${result[4]}개`);
    Console.print(`5개 일치 (${rewards[3]}원) - ${result[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (${rewards[2]}원) - ${result[2]}개`,
    );
    Console.print(`6개 일치 (${rewards[1]}원) - ${result[1]}개`);
  }

  /**
   * @returns {number[]}
   */
  #getRewardNums() {
    const numbers = CONSTANTS.NUMBERS;

    return [
      0,
      numbers.FIRST_REWARD,
      numbers.SECOND_REWARD,
      numbers.THIRD_REWARD,
      numbers.FOURTH_REWARD,
      numbers.FIFTH_REWARD,
    ];
  }

  async #inputPurchaseAmount() {
    while (true) {
      try {
        const amountInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_PURCHASE_AMOUNT,
        );
        const purchaseAmount = new PurchaseAmount(amountInput);

        return purchaseAmount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #inputWinningNumbers() {
    while (true) {
      try {
        const numbersInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_WINNING_NUMBERS,
        );
        const winningNumbers = new WinningNumbers(numbersInput);

        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  /**
   * @param {number[]} winningValues
   */
  async #inputBonusNumber(winningValues) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync(
          CONSTANTS.MESSAGES.INPUT_BONUS_NUMBER,
        );
        const bonusNumber = new BonusNumber(bonusInput, winningValues);

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
