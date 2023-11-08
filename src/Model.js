import { Random } from '@woowacourse/mission-utils';

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
      this.#lottoNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
  }
}

export default Model;
