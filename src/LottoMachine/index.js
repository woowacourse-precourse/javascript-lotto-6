import { Random } from '@woowacourse/mission-utils';
import { NUMBER, MESSAGE, RANDOM, SYMBOLS } from '../constants/index.js';
import Lotto from '../Lotto.js';
import Validator from '../Validator/index.js';
import Calculator from '../Caculator/index.js';
import Formatter from '../Formatter/index.js';

class LottoMachine {
  #purchaseAmount;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #caculator;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
    this.#caculator = null;
  }

  #setCalculator() {
    this.#caculator = new Calculator(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    Validator.validateDuplication(this.#winningNumbers, number);
    this.#bonusNumber = Number(number);
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

    const lottoStrings = this.#lottos
      .map((lotto) => lotto.formatString())
      .join(SYMBOLS.lineBreak);
    return `${SYMBOLS.lineBreak}${lottoCount}${MESSAGE.purchase}${lottoStrings}`;
  }

  makeResult() {
    const ranks = this.#caculator.calculateRanks();
    const revenu = this.#caculator.calculateRevenu(this.#purchaseAmount);
    return Formatter.formatResult(ranks, revenu);
  }
}

export default LottoMachine;
