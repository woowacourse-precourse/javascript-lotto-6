import { Console } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import getUserInput from './utils/getUserInput.js';
import createLottoNumbers from './utils/createLottoNumbers.js';
import { LOTTO, MATCHING_COUNT, LOTTO_PRIZE } from './constants/lotto.js';
import {
  INPUT_MESSAGE,
  PURCHASE_MESSAGE,
  STATISTICS_MESSAGE,
} from './constants/messages.js';
import {
  validateMinimumAmount,
  validateNumberType,
  validateUnit,
  validateExistingNumber,
  validateLottoRange,
} from './utils/validate.js';

class Game {
  #lottos;
  #winningLotto;
  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#winningLotto = null;
    this.#bonusNumber = null;
  }

  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.purchaseLotto(purchaseAmount);
    this.printPurchaseLottos();
    await this.createWinningLotto();
    await this.createBonusNumber();
    const rankCountResult = this.compareLotto(
      this.getLottos(),
      this.#winningLotto.getNumbers(),
      this.#bonusNumber,
    );
    const returnRate = this.calculateRate(purchaseAmount, rankCountResult);
    this.printStatistics(rankCountResult, returnRate);
  }

  validatePurchaseAmount(amount) {
    validateNumberType(amount);
    validateMinimumAmount(amount);
    validateUnit(amount);
  }

  async getPurchaseAmount() {
    try {
      const purchaseAmount = await getUserInput(INPUT_MESSAGE.purchaseAmount);
      this.validatePurchaseAmount(purchaseAmount);
      return Number(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();
    }
  }

  async getWinningNumbers() {
    const winningNumbers = await getUserInput(INPUT_MESSAGE.winningNumber);
    return winningNumbers.split(',').map((number) => Number(number.trim()));
  }

  async createWinningLotto() {
    try {
      const winningNumbers = await this.getWinningNumbers();
      this.#winningLotto = new Lotto(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      await this.createWinningLotto();
    }
  }

  async createBonusNumber() {
    try {
      const input = await getUserInput(INPUT_MESSAGE.bonusNumber);
      const bonusNumber = Number(input);
      this.validateBonusNumber(bonusNumber);
      this.#bonusNumber = bonusNumber;
    } catch (error) {
      Console.print(error.message);
      await this.createBonusNumber();
    }
  }

  validateBonusNumber(number) {
    const winningNumbers = this.#winningLotto.getNumbers();
    validateNumberType(number);
    validateLottoRange(number);
    validateExistingNumber(number, winningNumbers);
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
      const rank = this.getRank(lotto, winningNumbers, bonusNumber);
      if (rank !== 0) rankCount[rank - 1] += 1;
    });

    return rankCount.reverse();
  }

  getRank(lottoNumbers, winningNumbers, bonusNumber) {
    const matchingCount = lottoNumbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;

    if (matchingCount === MATCHING_COUNT.first) {
      return 1;
    }
    if (
      matchingCount === MATCHING_COUNT.second &&
      lottoNumbers.includes(bonusNumber)
    ) {
      return 2;
    }
    if (matchingCount === MATCHING_COUNT.third) {
      return 3;
    }
    if (matchingCount === MATCHING_COUNT.fourth) {
      return 4;
    }
    if (matchingCount === MATCHING_COUNT.fifth) {
      return 5;
    }
    return 0;
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

  printPurchaseLottos() {
    const lottos = this.getLottos();

    Console.print(PURCHASE_MESSAGE(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printStatistics(rankCountResult, returnRate) {
    Console.print(STATISTICS_MESSAGE.output);
    rankCountResult.forEach((count, idx) => {
      Console.print(STATISTICS_MESSAGE.result(idx, count, LOTTO_PRIZE[idx]));
    });
    Console.print(STATISTICS_MESSAGE.rateOfReturn(returnRate));
  }
}

export default Game;
