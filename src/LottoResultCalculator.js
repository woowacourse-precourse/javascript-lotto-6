import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MONEY, ERROR_MESSAGE, MESSAGE } from './constants/constants.js';

class LottoResultCalculator {
  #userLottos;

  #winningNumbers;

  #bonusNumber;

  #results = { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 0 };

  constructor({ userLottos, winningNumbers, bonusNumber }) {
    this.#validate(userLottos, winningNumbers, bonusNumber);

    this.#userLottos = userLottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;

    this.#calculateResults();
  }

  #validate(userLottos, winningNumbers, bonusNumber) {
    if (
      !Array.isArray(userLottos) ||
      !userLottos.every((lotto) => this.#numbersValidate(lotto))
    )
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER);

    if (
      !Array.isArray(winningNumbers) ||
      !this.#numbersValidate(winningNumbers)
    )
      throw new Error(ERROR_MESSAGE.LOTTO_RESULT);

    if (!Number.isInteger(bonusNumber) || bonusNumber <= 0 || bonusNumber > 45)
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER);
  }

  #numbersValidate(numbers) {
    const numbersSet = new Set(numbers);
    return (
      numbers.length === 6 &&
      numbersSet.size === 6 &&
      numbers.every(
        (number) => Number.isInteger(number) && number > 0 && number <= 45,
      )
    );
  }

  #increaseCount(count) {
    if (count === 5) {
      this.#results[this.#bonusNumber ? '5+' : '5'] += 1;
    } else if (count >= 3) {
      this.#results[count] += 1;
    }
  }

  #calculateResults() {
    this.#userLottos.forEach((userLotto) => {
      const commonNumbers = userLotto.filter((number) =>
        this.#winningNumbers.includes(number),
      );
      const count = commonNumbers.length;

      this.#bonusNumber = userLotto.includes(this.#bonusNumber);
      this.#increaseCount(count);
    });
  }

  #printResult(count, message) {
    const countText = count === '5+' ? '5개' : `${count}개`;
    Console.print(
      `${countText} 일치${message || ''} (${this.#formatNumber(
        PRIZE_MONEY[count],
      )}원) - ${this.#results[count]}개`,
    );
  }

  printResults() {
    Console.print(MESSAGE.WINNING_STATISTICS);

    this.#printResult(3);
    this.#printResult(4);
    this.#printResult(5);
    this.#printResult('5+', ', 보너스 볼 일치');
    this.#printResult(6);
  }

  #formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  get results() {
    return this.#results;
  }
}

export default LottoResultCalculator;
