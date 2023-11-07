import { Random } from '@woowacourse/mission-utils';
import { GAME_NUMBER, LOTTO_NUMBER } from '../constants/constants.js';
import Lotto from '../Lotto.js';
import validation from '../utills/validation.js';

class LottoGame {
  #count;
  #lottos;
  #winningNumber;
  #bonusNumber;

  setCount(amount) {
    validation.validateInputNumber(amount);
    validation.validatePurchaseAmount(amount);
    this.#count = Number(amount) / GAME_NUMBER.MONEY_UNIT;
  }

  setLottos() {
    let lottos = [];
    for (let i = 0; i < this.#count; i++) {
      lottos.push(new Lotto(this.makeRandomNumbers()));
    }
    this.#lottos = lottos;
  }

  setWinningNumber(numbers) {
    validation.validateInputArray(numbers);
    const parsedNumber = numbers.split(',').map(Number);
    this.#winningNumber = new Lotto(parsedNumber);
  }

  setBonusNumber(number) {
    validation.validateBonusNumber(number, this.#winningNumber.getNumbers());
    this.#bonusNumber = Number(number);
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

  getBonusNumber() {
    return this.#bonusNumber;
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
