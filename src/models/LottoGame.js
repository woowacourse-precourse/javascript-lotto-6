import { Random } from '@woowacourse/mission-utils';
import { GAME_NUMBER, LOTTO_NUMBER } from '../constants/constants.js';
import Lotto from '../Lotto.js';

class LottoGame {
  #count;
  #lottos;
  #winningNumber;
  #bonusNumber;

  setCount(amount) {
    this.#count = amount / GAME_NUMBER.MONEY_UNIT;
  }

  setLottos() {
    let lottos = [];
    for (let i = 0; i < this.#count; i++) {
      lottos.push(new Lotto(this.makeRandomNumbers()));
    }
    this.#lottos = lottos;
  }

  setWinningNumber(numbers) {
    this.#winningNumber = new Lotto(numbers);
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getLottoCount() {
    return this.#count;
  }

  getLottos() {
    return this.#lottos;
  }

  getWinningNumbers() {
    return this.#winningNumber.getNumbers();
  }

  makeRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.MIN,
      LOTTO_NUMBER.MAX,
      LOTTO_NUMBER.COUNT
    ).map(Number);
  }
}

export default LottoGame;
