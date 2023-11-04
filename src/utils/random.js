import { Random } from "@woowacourse/mission-utils";
import { LOTTO_NUMBERS, COUNT } from "../constants/numbers.js";

export function generateUniqueRandomNumbers() {
  const randomLottoNumbers = Random.pickUniqueNumbersInRange(
    LOTTO_NUMBERS.minimum,
    LOTTO_NUMBERS.maximum,
    COUNT.purchasedLottoNumbers
  );
  return randomLottoNumbers;
}
