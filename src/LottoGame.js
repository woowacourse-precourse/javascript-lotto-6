import { Console } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import createLottoNumbers from './utils/createLottoNumbers.js';
import { LOTTO, LOTTO_PRIZE } from './constants/lotto.js';
import Input from './Input.js';
import Output from './Output.js';

class LottoGame {
  #lottos;
  #winningLotto;
  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#winningLotto = null;
    this.#bonusNumber = null;
    this.input = new Input();
    this.output = new Output();
  }

  async start() {
    const purchaseAmount = await this.input.getPurchaseAmount();
    this.purchaseLotto(purchaseAmount);
    this.output.printPurchaseLottos(this.getLottos());
    await this.createWinningLotto();
    await this.createBonusNumber();
    const rankCountResult = this.compareLotto(
      this.#lottos,
      this.#winningLotto.getNumbers(),
      this.#bonusNumber,
    );
    const returnRate = this.calculateRate(purchaseAmount, rankCountResult);
    this.output.printStatistics(rankCountResult, returnRate);
  }

  async createWinningLotto() {
    try {
      const winningNumbers = await this.input.getWinningNumbers();
      this.#winningLotto = new Lotto(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      await this.createWinningLotto();
    }
  }

  async createBonusNumber() {
    const bonusNumber = await this.input.getBonusNumber(
      this.#winningLotto.getNumbers(),
    );
    this.#bonusNumber = bonusNumber;
  }

  purchaseLotto(amount) {
    const lottoCount = amount / LOTTO.price;

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = createLottoNumbers();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  compareLotto(purchasedLottos, winningNumbers, bonusNumber) {
    const rankCount = [0, 0, 0, 0, 0];
    purchasedLottos.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      if (rank !== 0) rankCount[rank - 1] += 1;
    });

    return rankCount.reverse();
  }

  calculateRate(purchaseAmount, rankCount) {
    const totalPrize = rankCount.reduce((acc, count, idx) => {
      return acc + count * LOTTO_PRIZE[idx];
    }, 0);

    const returnRate = (totalPrize / purchaseAmount) * 100;

    return Number(returnRate.toFixed(1));
  }

  getLottos() {
    const lottos = this.#lottos.map((lotto) => lotto.getNumbers());
    return lottos;
  }
}

export default LottoGame;
