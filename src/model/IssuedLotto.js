import { MissionUtils } from '@woowacourse/mission-utils';

class IssuedLotto {
  #list;

  #count;

  constructor(count) {
    this.#list = [];
    this.#validate(count);
    this.#count = count / 1000;
  }

  #validate(count) {
    if (/[^0-9]/g.test(count)) {
      throw new Error('[ERROR] 1000원 이상의 숫자를 입력해 주세요.');
    } else if (count < 1000) {
      throw new Error('[ERROR] 1000원 이상의 숫자를 입력해 주세요');
    } else if (count % 1000 !== 0) {
      throw new Error('[ERROR] 1,000단위로 입력해 주세요');
    }
  }

  createLottos() {
    for (let i = 0; i < this.#count; i += 1) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#list.push(lotto);
    }
  }

  getList() {
    return this.#list;
  }

  getCount() {
    return this.#count;
  }
}

export default IssuedLotto;
