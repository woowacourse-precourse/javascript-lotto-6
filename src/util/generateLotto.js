import { Random } from "@woowacourse/mission-utils";

import { LOTTO } from "../constants/constants.js";

export const generateLotto = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(LOTTO.min, LOTTO.max, LOTTO.length);
  // 로또 번호는 오름차순으로 정렬한다.
  lottoNumbers.sort((a, b) => a - b);

  return lottoNumbers;
};