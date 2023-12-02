import lottoNumberGenerator from '../utils/lottoNumberGenerator.js';
import Lotto from '../Lotto.js';
import { MATCH_TO_RANK, RANK, RANK_TITLE } from '../constant/Constant.js';

class LottoBundle {
  #lottoList;

  constructor(quantity) {
    this.#buyLotto(quantity);
  }

  #buyLotto(quantity) {
    this.#lottoList = Array.from({ length: quantity }, () => new Lotto(lottoNumberGenerator()));
  }

  getRankList({ winningLotto, bonusNumber }) {
    return Array.from(this.#lottoList, (lotto) =>
      this.calculateRank({ lotto, winningLotto, bonusNumber }),
    );
  }

  calculateRank({ lotto, winningLotto, bonusNumber }) {
    const matchingCount = lotto.getMatchingCounts(winningLotto);
    const hasBonusNumber = lotto.hasNumber(bonusNumber);

    if (matchingCount === RANK.second.match && hasBonusNumber) {
      return RANK_TITLE.second;
    }
    if (matchingCount < RANK.fifth.match) {
      return RANK_TITLE.noWin;
    }
    return MATCH_TO_RANK[matchingCount];
  }
}

export default LottoBundle;
