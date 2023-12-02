import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBERS } from '../constant/constant.js';

const lottoNumberGenerator = () =>
  Random.pickUniqueNumbersInRange(LOTTO_NUMBERS.min, LOTTO_NUMBERS.max, LOTTO_NUMBERS.count);

export default lottoNumberGenerator;
