import { Random } from '@woowacourse/mission-utils';
import {
  GAME_NUMBER,
  LOTTO_NUMBER,
  RANK,
  PRIZE,
} from '../constants/constants.js';
import Lotto from '../Lotto.js';
import validation from '../utills/validation.js';

class LottoGame {
  #count;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #result;

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
      LOTTO_NUMBER.LENGTH
    ).map(Number);
  }

  calculateResults() {
    const status = Array.from({ length: 6 }, () => 0);
    this.#lottos.forEach((lotto) => {
      const rank = this.matchWinningNumber(lotto.getNumbers());
      status[rank] += 1;
    });
    this.#result = status;
    return status;
  }

  matchWinningNumber(lotto) {
    const matchingNumbers = lotto.filter((number) =>
      this.#winningNumber.getNumbers().includes(number)
    ).length;
    const bonusMatch = lotto.includes(this.#bonusNumber);

    if (matchingNumbers === 6) return RANK.FIRST;
    if (matchingNumbers === 5 && bonusMatch) return RANK.SECOND;
    if (matchingNumbers === 5) return RANK.THIRD;
    if (matchingNumbers === 4) return RANK.FOURTH;
    if (matchingNumbers === 3) return RANK.FIFTH;
    return RANK.NONE;
  }

  calculateEarningRate() {
    const amount = this.#count * GAME_NUMBER.MONEY_UNIT;
    const prizeMoney = [
      PRIZE.NONE,
      PRIZE.FIRST,
      PRIZE.SECOND,
      PRIZE.THIRD,
      PRIZE.FOURTH,
      PRIZE.FIFTH,
    ];
    const earning = this.#result.reduce((acc, value, index) => {
      return acc + value * prizeMoney[index];
    }, 0);
    const earningRate = (earning / amount) * 100;

    return earningRate.toLocaleString(undefined, { maximumFractionDigits: 1 });
  }
}

export default LottoGame;
