import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Background {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  // getters & setters
  getLottos() {
    return this.#lottos;
  }

  #setLottos(lottos) {
    this.#lottos.splice(0, this.#lottos.length, ...lottos);
  }

  // queries
  issueLottos(bet) {
    let lottos = [];

    for (let i = 0; bet - i >= 1000; i += 1000) {
      let numbers = new Set();

      while (numbers.size !== 6) {
        let number = Random.pickNumberInRange(1, 45);
        numbers.add(number);
      }

      let lotto = new Lotto([...numbers]);
      lottos.push(lotto);
    }

    this.#setLottos(lottos);
  }
}

export default Background;
