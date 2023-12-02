import { BASE_AMOUNT, RANK, RANK_NAME } from '../constant/constant.js';

class LottoStatisticsManager {
  #lottoBundle;

  #winningNumbers;

  #ranks;

  constructor(lottoBundle, winningNumbers) {
    this.#lottoBundle = lottoBundle;
    this.#winningNumbers = winningNumbers;
    this.#initRanks();
  }

  #initRanks() {
    this.#ranks = RANK_NAME.reduce((ranks, rankName) => {
      ranks[rankName] = 0;
      return ranks;
    }, {});
  }

  calculateRanks() {
    const rankList = this.#lottoBundle.getRankList({
      winningLotto: this.#winningNumbers.getWinningLotto(),
      bonusNumber: this.#winningNumbers.getBonusNumber(),
    });

    rankList.forEach((rank) => {
      this.#ranks[rank] += 1;
    });
  }

  getRanks() {
    return this.#ranks;
  }

  getProfitRate() {
    const profit = this.getProfit();

    return (profit / (this.#lottoBundle.getQuantity() * BASE_AMOUNT)) * 100;
  }

  getProfit() {
    return Object.entries(this.#ranks).reduce(
      (profit, [key, count]) => profit + RANK[key].prize * count,
      0,
    );
  }
}

export default LottoStatisticsManager;
