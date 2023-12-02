import { BASE_AMOUNT, RANK, RANK_NAME } from '../constant/Constant.js';

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

  countRanks() {
    const rankList = this.#lottoBundle.getRankList({
      winningLotto: this.#winningNumbers.getWinningLotto(),
      bonusNumber: this.#winningNumbers.getBonusNumber(),
    });

    rankList.forEach((rank) => {
      this.#ranks[rank] += 1;
    });
  }
}

export default LottoStatisticsManager;
