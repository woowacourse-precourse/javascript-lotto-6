import { Random } from '@woowacourse/mission-utils';
import { LOTTO_RULES } from '../constants/lotto.js';

const generateRandomNumbers = () =>
  Random.pickUniqueNumbersInRange(
    LOTTO_RULES.minLottoNumber,
    LOTTO_RULES.maxLottoNumber,
    LOTTO_RULES.lottoNumberCount,
  );

const generateSortedRandomNumbers = () => {
  const randomNumbers = generateRandomNumbers();
  return randomNumbers.sort((a, b) => a - b);
};

export default generateSortedRandomNumbers;
