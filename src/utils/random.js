import { Random } from '@woowacourse/mission-utils';
import OPTION from '../constants/option.js';

function getRandomLottoNumbers() {
  return Random.pickUniqueNumbersInRange(
    OPTION.minLottoNumber,
    OPTION.maxLottoNumber,
    OPTION.lottoLength,
  );
}

export default getRandomLottoNumbers;
