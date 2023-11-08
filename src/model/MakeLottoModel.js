import { MissionUtils } from '@woowacourse/mission-utils';
import { OPTIONS } from '../constants/Constants.js';

class MakeLottoModel {
  static buyLottos(tickets) {
    const lottos = [];
    for (let i = 0; i < tickets; i += 1) {
      const newLotto = this.makeLottoNumbers();
      lottos.push(newLotto);
    }
    return lottos;
  }

  static makeLottoNumbers() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      OPTIONS.lottoNumberMin,
      OPTIONS.lottoNumberMax,
      OPTIONS.lottoNumberCount,
    ).sort((a, b) => a - b);
    return lotto;
  }
}

export default MakeLottoModel;
