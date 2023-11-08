import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Background {
  #numbers;
  #bonus;

  constructor() {
    this.#numbers = [];
    this.#bonus = 0;
  }

  // getters & setters
  setNumbers(numbers) {
    this.#numbers = numbers;
  }

  setBonus(bonus) {
    this.#bonus = bonus;
  }

  // queries
  issueLottos(bet) {
    let money = bet;
    const lottos = [];

    while (1000 <= money) {
      money -= 1000;

      const lotto = this.#makeLotto();
      lottos.push(lotto);
    }

    return [money, lottos];
  }

  // utility
  #makeLotto() {
    let numbers = new Set();

    while (numbers.size !== 6) {
      let number = Random.pickNumberInRange(1, 45);
      numbers.add(number);
    }

    return new Lotto([...numbers]);
  }
}

export default Background;
