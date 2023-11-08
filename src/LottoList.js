import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoList {
  #lottos;

  constructor(lottoCount) {
    this.#validate(lottoCount);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.#lottos = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = this.#generateLottoNumbers().sort((a, b) => a - b);
      Console.print(numbers);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }

  #validate(lottoCount) {
    if (!Number.isInteger(lottoCount) || lottoCount < 0) {
      throw new Error('[ERROR] 로또 개수 값이 올바르지 않습니다.');
    }
  }

  get allLottoNumbers() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottoList;
