import Validator from './Validator/Validator';
import { WINNING_AMOUNTS } from './constants/constants';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.isNumbersValid(String(numbers));
  }

  returnWinningNumbers() {
    return String(this.#numbers).split(',').map(Number);
  }

  returnOneLotto() {
    return this.#numbers;
  }

  calculateWinningStats(lottos, numbers) {
    const STATS = [0, 0, 0, 0, 0];

    lottos.forEach((lotto) => {
      const TOTAL = numbers.filter((el) => lotto.includes(el));
      const TOTAL_MATCHES = TOTAL.length;

      if (
        TOTAL_MATCHES === 6 ||
        (TOTAL_MATCHES === 5 && TOTAL.includes(numbers[numbers.length - 1]))
      ) {
        STATS[TOTAL_MATCHES - 2] += 1;
      }
      if ([3, 4, 5].includes(TOTAL_MATCHES)) {
        STATS[TOTAL_MATCHES - 3] += 1;
      }
    });

    return STATS;
  }

  getProfits(STATS) {
    const PRIZE_MONEYS = Object.values(WINNING_AMOUNTS).map(Number);
    let profits = 0;

    STATS.forEach((n, i) => {
      if (n > 0) {
        profits += PRIZE_MONEYS[4 - i];
      }
    });

    return profits;
  }

  calculateRate(profits, money) {
    return profits / Number(money);
  }
}

export default Lotto;
