import { Random } from '@woowacourse/mission-utils';
import { SETTING } from '../constants';

export const generateLottoNumber = () => {
  const { min_lotto_number, max_lotto_number, size } = SETTING;
  return Random.pickUniqueNumbersInRange(min_lotto_number, max_lotto_number, size);
}

export const calculateNumberMatch = (lotto, prize) => {
  return lotto
  .filter((num) => prize.includes(num))
  .length;
}

export const isBonusMatch = (lotto, bonus) => {
  return lotto.includes(bonus);
}