import Validator from './validator/Validator.js';
import { WINNING_AMOUNTS } from './constants/constants.js';

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
    return this.#numbers.sort((a, b) => a - b);
  }

  calculateWinningStats(lottos, winningNubers, bonusNumbers) {
    const STATS = [0, 0, 0, 0, 0];

    lottos.forEach((lotto) => {
      const MATCHES = winningNubers.filter((el) => lotto.includes(el));
      const MATCH_COUNT = MATCHES.length;
      const BONUS_MATCH = lotto.includes(bonusNumbers);

      if (MATCH_COUNT === 6) {
        STATS[0] += 1;
      } else if (MATCH_COUNT === 5 && BONUS_MATCH) {
        STATS[1] += 1;
      } else if (MATCH_COUNT === 5) {
        STATS[2] += 1;
      } else if (MATCH_COUNT === 4) {
        STATS[3] += 1;
      } else if (MATCH_COUNT === 3) {
        STATS[4] += 1;
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
