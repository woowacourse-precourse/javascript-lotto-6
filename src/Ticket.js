import { Console, Random } from '@woowacourse/mission-utils';

class Ticket {
  constructor() {
    this.numbers = [];
    this.rank = 0;
  }

  generateRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.sort(function (a, b) {
      return a - b;
    });
    this.numbers = randomNumbers;
  }

  showNumbers() {
    Console.print(`[${this.numbers.join(', ')}]`);
  }

  get Numbers() {
    return this.numbers;
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
    if (intersection.length === 3) {
      this.rank = 5;
    }
    if (intersection.length === 4) {
      this.rank = 4;
    }
    if (intersection.length === 5) {
      this.rank = 3;
    }
    if (intersection.length === 5 && isBonusNumberMatch === true) {
      this.rank = 2;
    }
    if (intersection.length === 6) {
      this.rank = 1;
    }
  }
}

export default Ticket;
