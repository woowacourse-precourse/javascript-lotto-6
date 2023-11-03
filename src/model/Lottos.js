import { Random } from '@woowacourse/mission-utils';

class Lottos {
  #lottos;

  constructor(lottos) {
    this.#lottos = Array.from({ length: lottos }).map(() => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      return numbers;
    });
  }
}

export default Lottos;
