import { Random } from "@woowacourse/mission-utils";
import { LOTTO_GAME_RULE } from "../utils/constants";

class LottoUtils {
  static generateRandomNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_GAME_RULE.lottoNumber[0],
      LOTTO_GAME_RULE.lottoNumber[1],
      LOTTO_GAME_RULE.lottoCount
    );
  }

  static ascendingSort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoUtils;
