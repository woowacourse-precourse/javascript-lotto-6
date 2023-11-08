import { Random } from '@woowacourse/mission-utils';
import OPTION from '../constants/option.js';

function getRandomLottoNumbers() {
  return Random.pickUniqueNumbersInRange(
    OPTION.lotto.minLottoNumber,
    OPTION.lotto.maxLottoNumber,
    OPTION.lotto.lottoLength,
  );
}

export default getRandomLottoNumbers;
