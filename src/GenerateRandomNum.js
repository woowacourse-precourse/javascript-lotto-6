import { Random } from '@woowacourse/mission-utils';

class GenerateRandomNum {
  generateNum() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default GenerateRandomNum;