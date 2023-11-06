import { Random } from '@woowacourse/mission-utils';
import { RANDOM_RULE } from '../utils/constant';

export class RandomNumber {
  constructor() {
    this.numbers;
  }

  generate = () => {
    this.numbers = Random.pickUniqueNumbersInRange(
      RANDOM_RULE.RANDOM_MIN,
      RANDOM_RULE.RANDOM_MAX,
      RANDOM_RULE.RANDOM_SIZE,
    );
    const sortednumbers = [...this.numbers.sort((cur, next) => cur - next)];
    return sortednumbers;
  };
}
