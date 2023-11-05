import { Random } from '@woowacourse/mission-utils';

import { LOTTO } from '../constants/setting.js';
import Lotto from '../Lotto.js';
import OutputView from '../views/Output.js';

class LottoController {
  #money;
  #lottos;
  #statistics;

  constructor(money) {
    this.#money = money;
    this.#lottos = [];
    this.#statistics = this.initLottoStatistics();
  }

  initLottoStatistics() {
    return {
      match3: { count: 0, prize: 5000 },
      match4: { count: 0, prize: 50000 },
      match5: { count: 0, prize: 1500000 },
      match5Bonus: { count: 0, prize: 30000000 },
      match6: { count: 0, prize: 2000000000 },
    };
  }

  purchaseLotto() {
    const lottoCount = this.#money / LOTTO.price;
    OutputView.printPurchaseMessage(lottoCount);

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.issueLotto();
      this.#lottos.push(lotto);
    }
  }

  showLottos() {
    this.#lottos.forEach(lotto => {
      const numbers = lotto.getNumbers();
      OutputView.printIssuedLottoNumbers(numbers);
    });
  }

  issueLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }

  compareLottos(winningNumbers, bonusNumber) {
    this.#lottos.forEach(lotto => {
      const result = this.matchLotto(lotto, winningNumbers, bonusNumber);
    });
  }

  matchLotto(lotto, winningNumbers, bonusNumber) {
    const numbers = lotto.getNumbers();
    let count = 0;
    const bonus = this.includeBonusNumber(numbers, bonusNumber);

    numbers.forEach(number => {
      if (winningNumbers.includes(number)) count += 1;
    });

    return { count, bonus };
  }

  includeBonusNumber(numbers, bonusNumber) {
    return numbers.includes(bonusNumber);
  }
}

export default LottoController;
