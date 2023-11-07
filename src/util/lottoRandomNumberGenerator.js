import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER } from '../constants/constant.js';

const lottoRandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUMBER.MIN, LOTTO_NUMBER.MAX, LOTTO_NUMBER.LENGTH);
  },
};

export default lottoRandomNumberGenerator;
