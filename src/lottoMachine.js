import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class lottoMachine {
  static make(lottoCount) {
    const lottoArray = [];

    Array.from({ length: lottoCount }).forEach(() => {
      const lottoNumbers = Random.MissionUtils.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(lottoNumbers);
      lottoArray.push(lotto);
    });

    return lottoArray;
  }
}

export default lottoMachine;
