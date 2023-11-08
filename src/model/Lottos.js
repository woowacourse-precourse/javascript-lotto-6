import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Lottos {
  #lottos = [];

  constructor(purchaseAmount) {
    const numberOfLottos = purchaseAmount / 1000;
    for (let i = 0; i < numberOfLottos; i++) {
      const lottoNumbers = this.#generateLotto();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  #generateLotto() {
    let lottoNumber = [];
    lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
