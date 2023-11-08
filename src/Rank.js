import { Console } from '@woowacourse/mission-utils';

export default class Rank {
  #ranking;
  count;
  #matchNumbers;
  #winnings;

  constructor(ranking, matchNumbers, winnings) {
    this.#ranking = ranking;
    this.count = 0;
    this.#matchNumbers = matchNumbers;
    this.#winnings = winnings;
  }

  get ranking() {
    return this.#ranking;
  }

  get matchNumbers() {
    return this.#matchNumbers;
  }

  get winnings() {
    return this.#winnings;
  }

  printRank() {
    if (this.ranking !== 2) {
      Console.print(
        `${this.matchNumbers}개 일치 (${this.winnings.toLocaleString()}원) - ${
          this.count
        }개`
      );
    } else if (this.ranking === 2) {
      Console.print(
        `${
          this.matchNumbers
        }개 일치, 보너스 볼 일치 (${this.winnings.toLocaleString()}원) - ${
          this.count
        }개`
      );
    }
  }
}
