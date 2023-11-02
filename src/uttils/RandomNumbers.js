import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_FORM } from '../constant';

const getRandomNumbers = (...props) => {
  const { rangeMin, rangeMax, length } = props;
  return MissionUtils.Random.pickUniqueNumbersInRange(
    rangeMin,
    rangeMax,
    length,
  ).sort();
};

const getLottoRandomNumbers = () => {
  return getRandomNumbers({
    rangeMin: LOTTO_FORM.range.min,
    rangeMax: LOTTO_FORM.range.max,
    length: LOTTO_FORM.length,
  });
};
export { getLottoRandomNumbers };
