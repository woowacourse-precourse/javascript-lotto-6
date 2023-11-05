import { Random } from '@woowacourse/mission-utils';

const NumberGenerator = {
  generator(quantity) {
    return Random.pickUniqueNumbersInRange(1, 45, quantity);
  }
}

export default NumberGenerator;
