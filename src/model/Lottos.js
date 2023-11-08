import { Random } from '@woowacourse/mission-utils';
import { OPTIONS } from '../constant/constants.js';
import Lotto from './Lotto.js';

class Lottos {
  #lottos = [];

  constructor(purchaseAmount) {
    const numberOfLottos = purchaseAmount / OPTIONS.unit;
    for (let i = 0; i < numberOfLottos; i++) {
      const lottoNumbers = this.#generateLotto();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  #generateLotto() {
    let lottoNumber = [];
    lottoNumber = Random.pickUniqueNumbersInRange(1, 45, `${OPTIONS.length}`);
    return lottoNumber;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
