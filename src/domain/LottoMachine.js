import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Statistics from '../Statistics.js';

const LottoMachine = {
  async getLottoCount(purchasePrice) {
    return purchasePrice / 1000;
  },
  async generateLotto(count) {
    const lottoList = [];
    while (count--) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const LottoInstance = new Lotto(numbers);
      lottoList.push(LottoInstance.result());
    }

    return lottoList;
  },
  async getStatisticsResult(winningNumber, bonusNumber, lottoList) {
    const result = [];
    const statisticsInst = new Statistics(
      winningNumber,
      bonusNumber,
      lottoList
    );

    return await statisticsInst.calculate(lottoList);
  },
};

export default LottoMachine;
