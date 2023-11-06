import { Random } from '@woowacourse/mission-utils';

class UserLottoNumber {
  #lottoNumber;

  constructor() {
    this.#lottoNumber = this.#generateLottoNumber();
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }

  #generateLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber.sort((a, b) => a - b);
  }
}
