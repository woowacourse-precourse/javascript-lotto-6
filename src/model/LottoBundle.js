import { Random } from '@woowacourse/mission-utils';
import { CONSTANT, LOTTO_NUMBER, RANK } from '../constants/Constant.js';
import Lotto from '../Lotto.js';
import Validator from '../validator/Validator.js';

class LottoBundle {
  #lottoCount;

  #lottoList = [];

  #totalRank = [0, 0, 0, 0, 0];

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

  calculateTotalRank(winningLotto, bonusNumber) {
    this.#lottoList.forEach((lotto) => {
      const rank = lotto.getRank(winningLotto, bonusNumber);
      const rankIndex = Object.keys(RANK).indexOf(rank);

      if (rankIndex !== -1) this.#totalRank[rankIndex] += 1;
    });
  }

  getProfitRate() {
    const profit = this.getProfit();

    return ((profit / (this.#lottoCount * CONSTANT.amountUnit)) * 100).toFixed(1);
  }

  getProfit() {
    const rewards = Object.values(RANK).map((rank) => rank.reward);

    return this.#totalRank.reduce((sum, rankCount, index) => sum + rankCount * rewards[index], 0);
  }

  getLottoList() {
    return this.#lottoList.map((lotto) => lotto.getNumbers());
  }

  getTotalRank() {
    return this.#totalRank;
  }
}

export default LottoBundle;
