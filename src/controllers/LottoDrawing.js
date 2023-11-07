// [로또 발행]
import { Random } from '@woowacourse/mission-utils';

export default class LottoDrawing {
  #line;

  #getRandomNumbers;

  constructor(line) {
    this.#line = line;
    this.#getRandomNumbers = () => Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  //  로또 구입 수량 체크
  checkCount() {
    return Number(this.#line) / 1000;
  }
}
