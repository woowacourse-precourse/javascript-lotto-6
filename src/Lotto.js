import { Console } from '@woowacourse/mission-utils';
import Validator from "./Validator.js";
import { RANK } from './constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validator = new Validator();
    this.validator.checkLottoNum(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print('[' + this.getNumbers().join(', ') + ']');
  }

  getRank(userNumber, bonusNumber) {
    const matchingCount = this.countMatchingNumber(userNumber);
    if (matchingCount === RANK.FIRST.MATCHING_COUNT) {
      return RANK.FIRST.NAME;
    }
    if (matchingCount === RANK.SECOND.MATCHING_COUNT && this.hasBonusNumber(bonusNumber)) {
      return RANK.SECOND.NAME
    }
    if (matchingCount === RANK.THIRD.MATCHING_COUNT) {
      return RANK.THIRD.NAME;
    }
    if (matchingCount === RANK.FOURTH.MATCHING_COUNT) {
      return RANK.FOURTH.NAME;
    }
    if (matchingCount === RANK.FIFTH.MATCHING_COUNT) {
      return RANK.FIFTH.NAME;
    }
  }

  countMatchingNumber(userNumber) {
    return this.getNumbers().filter(num => userNumber.includes(num)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.getNumbers().includes(bonusNumber);
  }
}

export default Lotto;
