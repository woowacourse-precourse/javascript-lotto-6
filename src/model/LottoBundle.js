import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER, RANK } from '../constants/Constant.js';
import Lotto from './Lotto.js';

class LottoBundle {
  #lottoList = [];

  buyLottos(count) {
    for (let i = 0; i < count; i += 1) {
      const newLottoNumbers = this.#makeLottoNumbers();
      const newLotto = new Lotto(newLottoNumbers);

      this.#lottoList.push(newLotto);
    }
  }

  #makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.minNum,
      LOTTO_NUMBER.maxNum,
      LOTTO_NUMBER.count,
    );
  }

  getTotalLottoNumberString() {
    return this.#lottoList.map((lotto) => lotto.getNumberString()).join('\n');
  }

  getTotalRank(winningLotto, bonusNumber) {
    const rank = [0, 0, 0, 0, 0];

    this.#lottoList.forEach((lotto) => {
      const matchingCount = lotto.getMatchingCount(winningLotto, bonusNumber);
      rank[this.getRankIndex(matchingCount)] += 1;
    });

    return rank;
  }

  getRankIndex(matchingCount) {
    return Object.values(RANK).reduce(
      (rankIndex, rankItem) => (rankItem.match === matchingCount ? rankItem.index : rankIndex),
      0,
    );
  }
}

export default LottoBundle;
