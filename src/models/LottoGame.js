import { Random } from '@woowacourse/mission-utils';
import { GAME_NUMBER, LOTTO_NUMBER } from '../constants/constants.js';
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
      LOTTO_NUMBER.COUNT
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

    if (matchingNumbers === 6) return 1;
    if (matchingNumbers === 5 && bonusMatch) return 2;
    if (matchingNumbers === 5) return 3;
    if (matchingNumbers === 4) return 4;
    if (matchingNumbers === 3) return 5;
    return 0;
  }

  calculateEarningRate() {
    const amount = this.#count * 1000;
    const prizeMoney = [0, 2000000000, 3000000, 1500000, 50000, 5000];
    const earning = this.#result.reduce((acc, value, index) => {
      return acc + value * prizeMoney[index];
    }, 0);
    const earningRate = ((earning / amount) * 100).toFixed(1);
    return earningRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default LottoGame;
