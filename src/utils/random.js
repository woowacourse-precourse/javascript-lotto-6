import { Random } from '@woowacourse/mission-utils';

const pickRandomLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

export { pickRandomLottoNumbers };
