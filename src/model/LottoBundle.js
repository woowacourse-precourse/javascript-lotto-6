import { Random } from '@woowacourse/mission-utils';
import { CONSTANT, LOTTO_NUMBER, RANK } from '../constants/Constant.js';
import Lotto from './Lotto.js';
import Validator from '../validator/Validator.js';

class LottoBundle {
  #lottoCount;

  #lottoList = [];

  constructor(amount) {
    this.#validateAmount(amount);
    this.#lottoCount = Number(amount) / CONSTANT.amountUnit;
  }

  #validateAmount(amount) {
    Validator.checkIsNotNumber(amount);
    Validator.checkIsNotPositive(amount);
    Validator.checkIsNotInUnit(amount);
  }

  buyLottos() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
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

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoList() {
    return this.#lottoList.map((lotto) => lotto.getNumbers());
  }

  getTotalRank(winningLotto, bonusNumber) {
    const rank = [0, 0, 0, 0, 0];

    this.#lottoList.forEach((lotto) => {
      const matchingCount = lotto.getMatchingCount(winningLotto, bonusNumber);
      if (matchingCount >= RANK.fourth.match) {
        rank[this.getRankIndex(matchingCount)] += 1;
      }
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
