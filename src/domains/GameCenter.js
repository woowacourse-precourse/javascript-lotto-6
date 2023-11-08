import { Random, Console } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '../constants/lotto.js';
import Lotto from './Lotto.js';
import formation from '../utils/formation.js';
import GAME_RESULT from '../constants/gameResults.js';
import GAME_GUIDE_MESSAGE from '../constants/messages.js';

class GameCenter {
  /**
   *
   * @param {number} money
   */
  constructor(money) {
    this.count = money / LOTTO_CONFIG.price;
    this.list = [];
    this.publish();
  }

  publish() {
    Array.from({ length: this.count }).forEach(() => {
      const newNumbers = this.generateCreateNumbers();
      this.list.push(newNumbers);
    });
  }

  generateCreateNumbers() {
    const newNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.minNumber,
      LOTTO_CONFIG.maxNumber,
      LOTTO_CONFIG.totalNumbers,
    );

    return new Lotto(newNumbers);
  }

  printList() {
    this.list.forEach((lotto) => {
      lotto.printNumbers();
    });
  }

  printCount() {
    Console.print(
      formation.format(GAME_GUIDE_MESSAGE.output.buyingResults, this.count),
    );
  }

  getRanks(winningNumbers, bonusNumber) {
    const lottoRanks = [];

    this.list.forEach((lotto) => {
      lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
    });

    return lottoRanks.filter((rank) => rank <= 5);
  }

  printWinningDetails(lottoRanks) {
    const winningDetails = [
      '3개 일치 (5,000원)',
      '4개 일치 (50,000원)',
      '5개 일치 (1,500,000원)',
      '5개 일치, 보너스 볼 일치 (30,000,000원)',
      '6개 일치 (2,000,000,000원)',
    ];
    winningDetails.forEach((winningDetail, idx) => {
      const winningCount = this.getWinningCount(lottoRanks, idx);

      Console.print(`${winningDetail} - ${winningCount}개`);
    });
  }

  printRate(lottoRanks) {
    const lottoRate = this.calculateRate(lottoRanks);

    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  calculateRate(lottoRanks) {
    const lottePrizes = [5000, 50000, 1500000, 30000000, 2000000000];
    const finalPrize = lottePrizes.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(lottoRanks, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.count * 1000;

    return ((finalPrize / purchaseMoney) * 100).toFixed(1);
  }

  getWinningCount(lottoRanks, idx) {
    return lottoRanks.filter((rank) => rank === 5 - idx).length;
  }
}

export default GameCenter;
