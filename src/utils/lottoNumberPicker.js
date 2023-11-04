import { Random } from "@woowacourse/mission-utils";

const pickLottoNumbers = (length) => {
  const LOTTO_MIN_NUMBER = 1;
  const LOTTO_MAX_NUMBER = 45;

  return Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, length);
};

export { pickLottoNumbers };
