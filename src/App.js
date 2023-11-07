import { Console, Random } from '@woowacourse/mission-utils';

import CONSTANTS from './constants.js';

import Lotto from './Lotto.js';
import PurchaseAmount from './PurchaseAmount.js';
import WinningNumbers from './WinningNumbers.js';
import BonusNumber from './BonusNumber.js';

class App {
  async play() {
    const lottos = await this.#buyLottos();

    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber(
      winningNumbers.getValues(),
    );

    const result = this.#calculateResult(lottos, winningNumbers, bonusNumber);

    this.#printResult(result);
  }

  async #buyLottos() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const purchaseCount =
      purchaseAmount.getAmount() / CONSTANTS.NUMBERS.LOTTO_PRICE;

    const lottos = [];

    for (let i = 0; i < purchaseCount; i++) {
      lottos.push(this.#makeLotto());
    }

    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(lotto.toString()));
    Console.print('');

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
   */
  #printResult(result) {
    this.#printStatistics(result);
  }

  /**
   * @param {number[]} result
   */
  #printStatistics(result) {
    const numbers = CONSTANTS.NUMBERS;

    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (${numbers.FIFTH_REWARD}원) - ${result[5]}개`);
    Console.print(`4개 일치 (${numbers.FOURTH_REWARD}원) - ${result[4]}개`);
    Console.print(`5개 일치 (${numbers.THIRD_REWARD}) - ${result[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (${numbers.SECOND_REWARD}) - ${result[2]}개`,
    );
    Console.print(`6개 일치 (${numbers.FIRST_REWARD}) - ${result[1]}개`);
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
