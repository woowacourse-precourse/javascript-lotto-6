import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';

class LottoMachine {
  #numberOfLottos;

  constructor(money) {
    this.#validateMoney(money);
    this.#numberOfLottos = money / LOTTO.price;
  }

  #validateMoney(money) {
    if (money % LOTTO.price) {
      throw new Error(ERROR.lotto.notDivisibleMoney);
    }
  }

  createLottos() {
    const lottos = [];
    for (let index = 0; index < this.#numberOfLottos; index += 1) {
      const numbers = this.#generateLottoNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoMachine;
