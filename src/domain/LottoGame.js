import { Random, Console } from '@woowacourse/mission-utils';
import User from './User.js';
import LottoStore from './LottoStore.js';
import View from '../view/View.js';

class LottoGame {
  #purchaseCount;

  constructor() {
    this.view = new View();
    this.player = new User();
    this.lottoStore = new LottoStore();
  }

  async startGame() {
    const purchaseAmount = await this.purchaseLotto();
    this.#purchaseCount = purchaseAmount / 1000;
    this.view.printPurchaseLottoCount(this.#purchaseCount);

    const lottos = this.lottoStore.generateLottos(this.#purchaseCount);
    this.player.lottos = lottos;
    this.view.printPurchaseLottos(lottos);

    await this.setWinningNumbers();

    await this.setBonusNumber();

    this.view.printWinningStatistic();

    const statistics = this.player.calculateStatistic(
      this.lottoStore.winningNumbers.lotto,
      this.lottoStore.bonusNumber,
    );

    const ratio = this.#calculateRatio(statistics);

    this.view.printWinningStatistic(statistics, ratio);
  }

  async purchaseLotto() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await this.view.readPurchaseAmount();
        this.player.purchaseAmount = purchaseAmount;
        break;
      } catch (error) {
        this.view.printError(error);
      }
    }
    return purchaseAmount;
  }

  set purchaseCount(purchaseCount) {
    this.#purchaseCount = purchaseCount;
  }

  winningNumberStringToNumberArray(winningNumberString) {
    const winningNumbers = winningNumberString.split(',').map(Number);
    return winningNumbers;
  }

  async setWinningNumbers() {
    while (true) {
      try {
        const winningNumberStr = await this.view.readWinningNumbers();
        const winningNumbers = this.winningNumberStringToNumberArray(winningNumberStr);
        this.lottoStore.winningNumbers = winningNumbers;

        // console.log(this.lottoStore.winningNumbers.lotto);
        break;
      } catch (error) {
        this.view.printError(error);
      }
    }
  }

  async setBonusNumber() {
    while (true) {
      try {
        const bonumsNumber = await this.view.readBonusNumber();
        this.lottoStore.bonusNumber = bonumsNumber;

        break;
      } catch (error) {
        this.view.printError(error);
      }
    }
  }

  #calculateRatio(statistics) {
    let totalIncome = 0;

    totalIncome +=
      statistics.FIRST * 2000000000 +
      statistics.SECOND * 30000000 +
      statistics.THIRD * 1500000 +
      statistics.FOURTH * 50000 +
      statistics.FIFTH * 5000;

    const profit = totalIncome - this.player.purchaseAmount;
    const ratio = ((profit + this.player.purchaseAmount) / this.player.purchaseAmount) * 100;
    return Math.round(ratio * 100) / 100;
  }
}

export default LottoGame;
