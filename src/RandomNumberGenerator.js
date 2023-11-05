import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from './utils/constants.js';

class RandomNumberGenerator {
  getRandomNumberArray(lottoTicketNumber) {
    const RANDOM_NUMBER_ARRAY = Array.from({ length: lottoTicketNumber }, () => {
      const UNIQUE_NUMBERS = new Set();

      while (UNIQUE_NUMBERS.size < NUMBER.lotto) {
        const RANDOM_NUMBER = Random.pickNumberInRange(1, 45);
        UNIQUE_NUMBERS.add(RANDOM_NUMBER);
      }

      return Array.from(UNIQUE_NUMBERS);
    });

    return RANDOM_NUMBER_ARRAY;
  }
}

export default RandomNumberGenerator;
