import Lotto from '../Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const LottoMachine = {
  async getLottoCount(purchasePrice) {
    return purchasePrice / 1000;
  },
  generateLotto(count) {
    const lottoList = [];
    while (count--) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const LottoInstance = new Lotto(numbers);
      lottoList.push(LottoInstance.result());
    }

    return lottoList;
  },
};

export default LottoMachine;
