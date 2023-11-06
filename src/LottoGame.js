import { Console } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';
import createLottoNumbers from './utils/createLottoNumbers.js';
import { LOTTO, LOTTO_PRIZE } from './constants/lotto.js';
import Input from './Input.js';
import Output from './Output.js';

class LottoGame {
  #lottos;
  #winningLotto;
  #purchaseAmount;

  constructor() {
    this.#purchaseAmount = 0;
    this.#lottos = [];
    this.#winningLotto = null;
    this.input = new Input();
    this.output = new Output();
  }

  async start() {
    await this.purchaseLotto();
    await this.createWinningLotto();
    const rankCountResult = this.compareLotto(
      this.#lottos,
      this.#winningLotto.getNumbers(),
      this.#winningLotto.getBonusNumber(),
    );
    const returnRate = this.calculateRate(
      this.#purchaseAmount,
      rankCountResult,
    );
    this.output.printStatistics(rankCountResult, returnRate);
  }

  async purchaseLotto() {
    const purchaseAmount = await this.input.getPurchaseAmount();
    this.#purchaseAmount = purchaseAmount;
    this.createLotto(purchaseAmount);
    this.output.printPurchaseLottos(this.getLottos());
  }

  createLotto(amount) {
    const lottoCount = amount / LOTTO.price;

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = createLottoNumbers();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  async createWinningLotto() {
    try {
      const winningNumbers = await this.input.getWinningNumbers();
      this.#winningLotto = new WinningLotto(winningNumbers);

      const bonusNumber = await this.input.getBonusNumber(
        this.#winningLotto.getNumbers(),
      );
      this.#winningLotto.setBonusNumber(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      await this.createWinningLotto();
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
