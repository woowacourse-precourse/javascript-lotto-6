import { MissionUtils } from '@woowacourse/mission-utils';
import { BONUS_BALL_FORM, LOTTO_FORM } from '../constants/Rule.js';
import { sortNumbers } from './Sort.js';

const getRandomNumbers = (range, length) => {
  const numbers = Array.from(
    MissionUtils.Random.pickUniqueNumbersInRange(range.min, range.max, length),
  );
  return sortNumbers(numbers);
};

const getLottoRandomNumbers = () => {
  const { range, length } = LOTTO_FORM;
  return getRandomNumbers(range, length);
};

const getBonusBallNumber = () => {
  const { range, length } = BONUS_BALL_FORM;
  return getRandomNumbers(range, length);
};

export { getRandomNumbers, getLottoRandomNumbers, getBonusBallNumber };
