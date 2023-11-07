import { Random } from '@woowacourse/mission-utils';

class GenerateRandomNum {
  generateNum() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default GenerateRandomNum;