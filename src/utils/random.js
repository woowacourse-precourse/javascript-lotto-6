import { Random } from '@woowacourse/mission-utils';
import { MIN, MAX, COUNT } from '../constants';

const pickRandomLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(MIN, MAX, COUNT);
};

export { pickRandomLottoNumbers };
