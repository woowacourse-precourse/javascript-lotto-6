import { Console } from '@woowacourse/mission-utils';

class CalculateController {
  #lottos;
  #winning;
  #bonus;
  #state;

  constructor(lottos, winning, bonus) {
    this.#lottos = lottos;
    this.#winning = winning;
    this.#bonus = bonus;
    this.#state = [0, 0, 0, 0, 0];
  }

  calculateState() {
    this.#lottos.forEach((lotto) => {
      const updateState = lotto.calculate(this.#winning, this.#bonus);
      if (updateState !== -1) {
        this.#state[updateState] += 1;
      }
    });
    return this.#state;
  }

  rating() {
    let rate = 0;
    const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
    prizes.forEach((prize, index) => {
      rate += prize * this.#state[index];
    });
    return (rate / (this.#lottos.length * 1000)) * 100;
  }
}

export default CalculateController;
