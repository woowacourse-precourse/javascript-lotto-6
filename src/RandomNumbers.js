import { Random } from "@woowacourse/mission-utils";

class RandomNumbers {
  generateNum() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default RandomNumbers;
