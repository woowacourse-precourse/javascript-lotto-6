import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';
import CustomError from './errors/CustomError.js';

class LottoMachine {
  #numberOfLottos;

  constructor() {
    this.#numberOfLottos = 0;
  }

  insertMoney(money) {
    this.#validateMoney(money);
    this.#numberOfLottos = money / LOTTO.price;
  }

  #validateMoney(money) {
    if (money % LOTTO.price) {
      throw new CustomError(ERROR.lotto.notDivisibleMoney);
    }
  }

  get numberOfLottos() {
    return this.#numberOfLottos;
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
    return Random.pickUniqueNumbersInRange(
      LOTTO.range.min,
      LOTTO.range.max,
      LOTTO.size,
    );
  }
}

export default LottoMachine;
