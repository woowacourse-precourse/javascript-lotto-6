import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/Constant.js';
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
      RANDOM_NUMBER.minNum,
      RANDOM_NUMBER.maxNum,
      RANDOM_NUMBER.count,
    );
  }
}

export default LottoBundle;
