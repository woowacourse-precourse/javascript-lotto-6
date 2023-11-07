import { Random } from '@woowacourse/mission-utils';
import {
  MAX_NUMBER,
  MIN_NUMBER,
  LOTTO_NUMBER_COUNT,
} from './constant/lottoNumber';

const genLottoNumber = () =>
  Random.pickUniqueNumbersInRange(
    MIN_NUMBER,
    MAX_NUMBER,
    LOTTO_NUMBER_COUNT
  ).sort((a, b) => a - b);

export default genLottoNumber;
