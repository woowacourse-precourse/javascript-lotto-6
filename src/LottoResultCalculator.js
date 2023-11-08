import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MONEY } from './constants/constants.js';

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
    ) {
      throw new Error('[ERROR] 로또 번호가 잘못된 형식입니다.');
    }
    if (
      !Array.isArray(winningNumbers) ||
      !this.#numbersValidate(winningNumbers)
    ) {
      throw new Error('[ERROR] 당첨 번호가 잘못된 형식입니다.');
    }
    if (
      !Number.isInteger(bonusNumber) ||
      bonusNumber <= 0 ||
      bonusNumber > 45
    ) {
      throw new Error('[ERROR] 보너스 번호가 잘못된 형식입니다.');
    }
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

  #calculateResults() {
    this.#userLottos.forEach((userLotto) => {
      const commonNumbers = userLotto.filter((number) =>
        this.#winningNumbers.includes(number),
      );
      const count = commonNumbers.length;

      if (count === 5) {
        if (userLotto.includes(this.#bonusNumber)) {
          this.#results['5+'] += 1;
        } else {
          this.#results[5] += 1;
        }
      } else if (count >= 3) {
        this.#results[count] += 1;
      }
    });
  }

  printResults() {
    Console.print('\n당첨 통계\n---');

    Console.print(
      `3개 일치 (${this.#formatNumber(PRIZE_MONEY[3])}원) - ${
        this.#results[3]
      }개`,
    );
    Console.print(
      `4개 일치 (${this.#formatNumber(PRIZE_MONEY[4])}원) - ${
        this.#results[4]
      }개`,
    );
    Console.print(
      `5개 일치 (${this.#formatNumber(PRIZE_MONEY[5])}원) - ${
        this.#results[5]
      }개`,
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${this.#formatNumber(
        PRIZE_MONEY['5+'],
      )}원) - ${this.#results['5+']}개`,
    );
    Console.print(
      `6개 일치 (${this.#formatNumber(PRIZE_MONEY[6])}원) - ${
        this.#results[6]
      }개`,
    );
  }

  #formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  get results() {
    return this.#results;
  }
}

export default LottoResultCalculator;
