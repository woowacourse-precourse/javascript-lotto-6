import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Random from '../utils/random.js';

class LottoMachine {
  #random;

  constructor() {
    this.#random = new Random();
  }

  buyLotto(money) {
    // 유효성 검사 추가
    const buyCount = Math.floor(money / 1000);

    const lottoList = [];
    for (let i = 0; i < buyCount; i++) {
      lottoList.push(new Lotto(this.#random.getRandomLotto()));
    }
    // this.validate(lottoList);

    return lottoList;
  }
}
export default LottoMachine;
