import Lotto from './Lotto.js';
import { Print } from './interface/Output.js';
import { generateRandomNumbers } from './utils/generateRandomNumbers.js';
import { sortAscending } from './utils/sort.js';

export class Computer {
  #lottos;
  #count;
  constructor(count) {
    this.#count = count;
  }

  getLottos() {
    return this.#lottos;
  }

  getRandomNumbers() {
    return generateRandomNumbers(1, 45, 6);
  }

  makeLottos() {
    this.#lottos = Array.from({ length: this.#count }).map(() => {
      const sortedRandomNumbers = sortAscending(this.getRandomNumbers());

      return new Lotto(sortedRandomNumbers);
    });
  }

  printLottos() {
    Print(`${this.#count}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => Print(lotto.getNumbers()));
  }
}
