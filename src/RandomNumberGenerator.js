import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from './utils/constants.js';

class RandomNumberGenerator {
  getRandomNumberArray(lottoTicketNumber) {
    const RANDOM_NUMBER_ARRS = [];
    for (let i = 0; i < lottoTicketNumber; i++) {
      const RANDOM_NUMBER_ARR = Random.pickUniqueNumbersInRange(1, 45, 6);
      RANDOM_NUMBER_ARR.sort((a, b) => a - b);
      RANDOM_NUMBER_ARRS.push(RANDOM_NUMBER_ARR);
    }

    return RANDOM_NUMBER_ARRS;
  }
}

export default RandomNumberGenerator;
