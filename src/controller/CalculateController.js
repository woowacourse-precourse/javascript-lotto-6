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
}

export default CalculateController;
