import { Console, Random } from '@woowacourse/mission-utils';

class Purchase {
  #amount;
  lottoList = [];

  constructor(amount) {
    this.#amount = amount;
  }
  list() {
    const COUNT = this.#amount / 1000;

    for (let i = 0; i < COUNT; i++) {
      const LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6);
      const SORTED_LOTTO = LOTTO.sort((a, b) => a - b);
      this.lottoList.push(SORTED_LOTTO);
    }

    return this.lottoList;
  }

