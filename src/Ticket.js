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
    Console.print(this.numbers);
  }

  get Numbers() {
    return this.numbers;
  }

  get Rank() {
    return this.rank;
  }
}

export default Ticket;
