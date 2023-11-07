import { Console } from '@woowacourse/mission-utils';
import { LOTTO, OUTPUT, PRIZE_MONEY } from './Constant';

class Calculation {
  #purchasedLotto;
  #winningNumber;
  #bonusNumer;
  #rank;

  constructor(purchasedLotto, winningNumber, bonusNumer) {
    this.#purchasedLotto = purchasedLotto;
    this.#winningNumber = winningNumber;
    this.#bonusNumer = bonusNumer;
    this.#rank = {
      THREE: 0,
      FOUR: 0,
      FIVE: 0,
      BONUS: 0,
      SIX: 0,
    };
  }

  checkMatchNumbers() {
    const matches = [];
    this.#purchasedLotto.forEach(lotto => {
      const matchNumbers = this.#winningNumber.filter(number =>
        lotto.includes(number),
      );
      if (matchNumbers.length === LOTTO.MATCH_THREE) {
        this.#rank.THREE += 1;
      } else if (matchNumbers.length === LOTTO.MATCH_FOUR) {
        this.#rank.FOUR += 1;
      } else if (matchNumbers.length === LOTTO.MATCH_FIVE) {
        this.#rank[this.#checkBonusNumber(matchNumbers)] += 1;
      } else if (matchNumbers.length === LOTTO.LOTTO_LENGHT) {
        this.#rank.SIX += 1;
      }
    });
    this.#printMatch();
  }

  #checkBonusNumber(matchNumbers) {
    if (matchNumbers.includes(this.#bonusNumer)) {
      return 'BONUS';
    }
    return 'FIVE';
  }

  #printMatch() {
    Console.print(`${OUTPUT.PRINT_WINNING_STATISTICS}${OUTPUT.PRINT_LINE}`);

    let message = '';
    Object.entries(this.#rank).forEach(([key, value]) => {
      message += OUTPUT[`PRINT_MATCH_${key}`](value);
    });

    Console.print(message);
  }

  calcTotalReturn() {
    let profit = 0;
    Object.entries(this.#rank).forEach(([key, value]) => {
      if (value > 0) {
        profit += PRIZE_MONEY[PRIZE_MONEY.MATCH_COUNT[key]];
      }
    });

    const purcahseAmount = this.#purchasedLotto.length * LOTTO.PRICE;
    const totalReturn = (profit / purcahseAmount) * 100;
    Console.print(OUTPUT.PRINT_TOTAL_RETURN(totalReturn.toFixed(1)));
  }
}

export default Calculation;
