import { Random } from '@woowacourse/mission-utils';

class Consumer {
  #price;
  #quantity;
  #lottoNumber;

  constructor(price) {
    this.#validate(price);
    this.#price = price;
    this.#lottoNumber = [];
  }

  #validate(price) {
    if (isNaN(price)) {
      throw new Error('[ERROR] 유효하지 않은 입력입니다.');
    }

    if (price % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }

  getQuantity() {
    this.#quantity = this.#price / 1000;
    return this.#quantity;
  }

  pickLottoNumber() {
    for (let i = 0; i < this.#quantity; i += 1) {
      this.#lottoNumber.push(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.#lottoNumber[i].sort((a, b) => a - b);
    }
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }
}

export default Consumer;
