import { Random } from '@woowacourse/mission-utils';
import { NUMBER, RANDOM } from '../constants/index.js';
import Lotto from '../Lotto.js';
import Calculator from '../Calculator/index.js';
import Formatter from '../Formatter/index.js';

class LottoMachine {
  #purchaseAmount;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #calculator;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
    this.#calculator = null;
  }

  #setCalculator() {
    this.#calculator = new Calculator(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
    this.#setCalculator();
  }

  #pickLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        RANDOM.min,
        RANDOM.max,
        NUMBER.lottoCount,
      );
      return new Lotto(numbers);
    });
  }

  buy(purchaseAmount) {
    const lottoCount = purchaseAmount / NUMBER.lottoPurchaseUnit;
    this.#purchaseAmount = purchaseAmount;
    this.#lottos = this.#pickLottos(lottoCount);

    return { lottos: Formatter.formatLottos(this.#lottos), lottoCount };
  }

  makeResult() {
    const ranks = this.#calculator.calculateRanks();
    const revenue = this.#calculator.calculateRevenue(this.#purchaseAmount);
    return Formatter.formatResult(ranks, revenue);
  }
}

export default LottoMachine;
