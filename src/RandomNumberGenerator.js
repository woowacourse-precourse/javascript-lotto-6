import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  getRandomNumberArray(lottoTryCount) {
    const RANDOM_NUMBER_ARRS = [];
    for (let i = 0; i < lottoTryCount; i++) {
      const RANDOM_NUMBER_ARR = Random.pickUniqueNumbersInRange(1, 45, 6);
      RANDOM_NUMBER_ARR.sort((a, b) => a - b);
      RANDOM_NUMBER_ARRS.push(RANDOM_NUMBER_ARR);
    }

    return RANDOM_NUMBER_ARRS;
  }
}

export default RandomNumberGenerator;
