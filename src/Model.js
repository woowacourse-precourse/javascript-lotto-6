import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

class Model {
  #lottoNumbers = [];

  // 테스트를 위해 추가한 getter
  getLottoNumbersLength() {
    return this.#lottoNumbers.length;
  }

  generateRandomLottoNumbers(money) {
    let i;
    const count = money / 1000;

    for (i = 0; i < count; i += 1) {
      const temp = Random.pickUniqueNumbersInRange(1, 45, 6);
      temp.sort((a, b) => a - b);
      const lotto = new Lotto(temp);
      this.#lottoNumbers.push(lotto);
    }

    return this.#lottoNumbers;
  }
}

export default Model;
