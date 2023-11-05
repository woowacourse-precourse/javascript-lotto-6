import { Random } from "@woowacourse/mission-utils";

class LottoUtils {
  generateRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  ascendingSort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoUtils;
