import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from '../constants/lottoNumber';

export default function generateLottoNumbers() {
  return Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER.min,
    LOTTO_NUMBER.max,
    LOTTO_NUMBER.length,
  );
}
