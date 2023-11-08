import { Random } from '@woowacourse/mission-utils';

const NumberGenerator = {
  generator(minNumber, maxNumber, quantity) {
    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, quantity);
  },
};

export default NumberGenerator;
