import { Random } from '@woowacourse/mission-utils';

export default class Computer {
  static getRandomSixNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}
