import Lotto from './Lotto.js';
import { generateRandomNumbers } from './utils/generateRandomNumbers.js';

export class Computer {
  #lottos;
  constructor(money) {
    const count = money / 1000;
    this.makeLottos(count);
  }

  getLottos() {
    return this.#lottos;
  }

  getRandomNumbers() {
    return generateRandomNumbers(1, 45, 6);
  }

  makeLottos(count) {
    this.#lottos = Array.from({ length: count }).map(() => new Lotto(this.getRandomNumbers()));
  }
}
