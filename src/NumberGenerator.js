import { Random } from "@woowacourse/mission-utils";

class NumberGenerator {
  static createRandomNumber() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);

    return randomNumber;
  }
}

export default NumberGenerator;
