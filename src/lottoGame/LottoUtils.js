import { Random } from "@woowacourse/mission-utils";

class LottoUtils {
  static generateRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  static ascendingSort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoUtils;
