import { Random } from '@woowacourse/mission-utils';

const MIN = 1;
const MAX = 45;
const LENGTH = 6;

const lottoRandomNumberGenerator = {
  generate() {
    return Random.pickUniqueNumbersInRange(MIN, MAX, LENGTH);
  },
};

export default lottoRandomNumberGenerator;
