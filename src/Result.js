import { ZERO, ONE, THREE, FOUR, FIVE, SIX } from './constants/numbers.js';
import { matchNumbers, matchWinnings } from './variables/data.js';

class Result {
  #lottos;
  #winning;
  #bonus;
  #profit;

  constructor(lottos, winning, bonus) {
    this.#lottos = lottos;
    this.#winning = winning;
    this.#bonus = bonus;
  }

  spreadLottos() {
    this.#lottos.forEach(lotto => {
      this.countWinningAndBonus(lotto);
    });

    this.countMatchWinnings();
  }

  countWinningAndBonus(lotto) {
    let winningCount = 0;
    let bonusCount = 0;

    lotto.forEach(number => {
      if (this.#winning.includes(number)) {
        winningCount = winningCount + 1;
      }
      
      if (this.#bonus === number) {
        bonusCount = bonusCount + 1;
      }
    });
    
    this.countMatchNumbers(winningCount, bonusCount);
  }

  countMatchNumbers(winningCount, bonusCount) {
    if (winningCount === THREE) {
      matchNumbers.three = matchNumbers.three + 1;
    } else if (winningCount === FOUR) {
      matchNumbers.four = matchNumbers.four + 1;
    } else if (winningCount === FIVE && bonusCount === ZERO) {
      matchNumbers.five = matchNumbers.five + 1;
    } else if (winningCount === FIVE && bonusCount === ONE) {
      matchNumbers.fivePlusBonus = matchNumbers.fivePlusBonus + 1;
    } else if (winningCount === SIX) {
      matchNumbers.six = matchNumbers.six + 1;
    }
  }

  countMatchWinnings() {
    Object.keys(matchNumbers).forEach(key => {
      matchWinnings[key] = matchWinnings[key] * matchNumbers[key];
    });
  }

  countProfit() {
    this.#profit = Object.values(matchWinnings).reduce((acc, value) => acc + value, 0);
  }

  getProfit() {
    return this.#profit;
  }
}

export default Result;
