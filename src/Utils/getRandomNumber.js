import { Random } from '@woowacourse/mission-utils';
import { LOTTO_INFO } from './constants';

const [min, max, size] = [
  LOTTO_INFO.MIN_NUMBER,
  LOTTO_INFO.MAX_NUMBER,
  LOTTO_INFO.LENGTH,
];

const getRandomNumber = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(min, max, size);
  return lottoNumbers.sort((a, b) => a - b);
};

export default getRandomNumber;
