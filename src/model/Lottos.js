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
    const lottoNumber = [];
    while (lottoNumber.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!lottoNumber.includes(number)) {
        lottoNumber.push(number);
      }
    }
    return lottoNumber;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default Lottos;
