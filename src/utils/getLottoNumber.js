import { Random } from "@woowacourse/mission-utils";
import { LOTTO_LENGTH , MAX_NUMBER , MIN_NUMBER } from '../constants/constants.js';

export const getLottoNumber = function() {
  return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
}
