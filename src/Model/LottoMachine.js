import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';
import { isPositiveInteger } from '../utils/function.js';

class LottoMachine {
  #money;

  #numberOfLottos;

  #lottos;

  constructor() {
    this.#numberOfLottos = 0;
    this.#lottos = [];
  }

  get money() {
    return this.#money;
  }

  get numberOfLottos() {
    return this.#numberOfLottos;
  }

  get lottos() {
    return this.#lottos;
  }

  insertMoney(money) {
    this.#validateMoney(money);
    this.#money = money;
    this.#numberOfLottos = money / LOTTO.price;
  }

  #validateMoney(money) {
    if (!isPositiveInteger(money)) {
      throw new CustomError(ERROR.input.invalidMoney);
    }

    if (money % LOTTO.price) {
      throw new CustomError(ERROR.lotto.notDivisibleMoney);
    }
  }

  createLottos() {
    for (let i = 0; i < this.#numberOfLottos; i += 1) {
      const numbers = this.#generateLottoNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
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
