import Lotto from './Lotto.js';
import { Print } from '../../interface/Output.js';
import { generateRandomNumbers } from '../../utils/generateRandomNumbers.js';
import { sortAscending } from '../../utils/sort.js';
import { getArrayLikeString } from '../../utils/typeCasters.js';
import { RANDOM_NUMBERS_RANGE } from '../../constants.js';

export class Lottos {
  #list;
  #count;
  constructor(count) {
    this.#count = count;

    this.#list = Array.from({ length: this.#count }).map(() =>
      this.makeNewLotto(
        generateRandomNumbers(
          RANDOM_NUMBERS_RANGE.min,
          RANDOM_NUMBERS_RANGE.max,
          RANDOM_NUMBERS_RANGE.size,
        ),
      ),
    );
  }

  get() {
    return this.#list.map((lotto) => lotto.getNumbers());
  }

  makeNewLotto(numbers) {
    return new Lotto(numbers);
  }

  print() {
    Print(`\n${this.#count}개를 구매했습니다.`);

    this.#list.forEach((lotto) => Print(getArrayLikeString(sortAscending(lotto.getNumbers()))));
  }
}
