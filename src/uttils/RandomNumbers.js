import { MissionUtils } from '@woowacourse/mission-utils';
import { BONUS_BALL_FORM, LOTTO_FORM } from '../constant';

const getRandomNumbers = (range, length) => {
  return Array.from(
    MissionUtils.Random.pickUniqueNumbersInRange(range.min, range.max, length),
  ).sort();
};

const getLottoRandomNumbers = () => {
  const { range, length } = LOTTO_FORM;
  return getRandomNumbers(range, length);
};

const getBonusBallNumber = () => {
  const { range, length } = BONUS_BALL_FORM;
  return getRandomNumbers(range, length);
};

export { getLottoRandomNumbers, getBonusBallNumber };
