import { Random } from "@woowacourse/mission-utils";
import { LOTTO_NUMBERS } from "../constants/numbers.js";

export function generateUniqueRandomNumbers() {
  const randomLottoNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_NUMBERS.minimum,
    LOTTO_NUMBERS.maximum,
    LOTTO_NUMBERS.purchased
  );
  return randomLottoNumbers;
}
