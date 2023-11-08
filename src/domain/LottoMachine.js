import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Statistics from '../Statistics.js';
import * as NUMBER from '../constant/Number.js';

const LottoMachine = {
  async getLottoCount(purchasePrice) {
    return purchasePrice / NUMBER.LOTTO_PRICE;
  },
  async generateLotto(count) {
    const lottoList = [];
    while (count--) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        NUMBER.LOTTO_FIRST_NUMBER,
        NUMBER.LOTTO_LAST_NUMBER,
        NUMBER.LOTTO_COUNT
      );
      const LottoInstance = new Lotto(numbers);
      lottoList.push(LottoInstance.result());
    }

    return lottoList;
  },
  async getStatisticsResult(winningNumber, bonusNumber, lottoList) {
    const statisticsInst = new Statistics(
      winningNumber,
      bonusNumber,
      lottoList
    );

    return await statisticsInst.calculate(lottoList);
  },
};

export default LottoMachine;
