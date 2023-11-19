import { Console, Random } from '@woowacourse/mission-utils';
import { LOTTO } from './Constants.js';

class Ticket {
  constructor() {
    this.numbers = [];
    this.rank = 0;
  }

  generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.NUMBER_RANGE.FROM,
      LOTTO.NUMBER_RANGE.TO,
      LOTTO.NUMBER_RANGE.PICK,
    );
    randomNumbers.sort(function (a, b) {
      return a - b;
    });
    this.numbers = randomNumbers;
  }

  showNumbers() {
    Console.print(`[${this.numbers.join(', ')}]`);
  }

  get Rank() {
    return this.rank;
  }

  compareNumbers(winningNumbers, bonusNumber) {
    let intersection = this.numbers.filter((x) => winningNumbers.includes(x));
    let isBonusNumberMatch = false;

    if (intersection.length >= 5) {
      if (this.numbers.includes(bonusNumber)) {
        isBonusNumberMatch = true;
      }
    }
    return [intersection, isBonusNumberMatch];
  }

  updateRank(intersection, isBonusNumberMatch) {
    if (intersection.length === LOTTO.NUMBER_OF_MATCH.RANK_5) {
      this.rank = 5;
    }
    if (intersection.length === LOTTO.NUMBER_OF_MATCH.RANK_4) {
      this.rank = 4;
    }
    if (intersection.length === LOTTO.NUMBER_OF_MATCH.RANK_3) {
      this.rank = 3;
    }
    if (intersection.length === LOTTO.NUMBER_OF_MATCH.RANK_2 && isBonusNumberMatch === true) {
      this.rank = 2;
    }
    if (intersection.length === LOTTO.NUMBER_OF_MATCH.RANK_1) {
      this.rank = 1;
    }
  }
}

export default Ticket;
