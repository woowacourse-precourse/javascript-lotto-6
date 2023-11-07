import { MissionUtils } from '@woowacourse/mission-utils';

class UserLotto {
  #list;

  #count;

  constructor(amount) {
    this.#list = [];
    this.#validate(amount);
    this.#count = amount / 1000;
  }

  #validate(amount) {
    if (!/\d/.test(amount)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    } else if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 1,000단위로 입력해주세요');
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

export default UserLotto;
