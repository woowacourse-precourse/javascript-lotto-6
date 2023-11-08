import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/lotto.js';
import paramType from '../lib/paramType/src/paramType.js';
import { ERROR_MESSAGE } from '../constants/message.js';

export default class RandomNumberGenerator {
  #minInclusive;
  #maxInclusive;
  #count;

  constructor(
    minInclusive = LOTTO.NUMBER_RANGE.MIN,
    maxInclusive = LOTTO.NUMBER_RANGE.MAX,
    count = LOTTO.NUMBER_COUNT,
    _0 = paramType(minInclusive, 'number'),
    _1 = paramType(maxInclusive, 'number'),
    _2 = paramType(count, 'number'),
  ) {
    this.#minInclusive = minInclusive;
    this.#maxInclusive = maxInclusive;
    this.#count = count;
  }

  numbers() {
    const randomNumberArray = Random.pickUniqueNumbersInRange(
      this.#minInclusive,
      this.#maxInclusive,
      this.#count,
    );
    this.#validate(randomNumberArray);

    return randomNumberArray;
  }

  #validate(numbers) {
    if (numbers.some((num) => !this.#isNumber(num))) {
      throw new Error(ERROR_MESSAGE.HAVE_NOT_NUMBER_TYPE);
    }
    if (numbers.some((num) => this.#isOverRange(num))) {
      throw new Error(ERROR_MESSAGE.HAVE_OVER_RANGE_NUMBERS);
    }
  }

  #isOverRange(number) {
    return !(number >= this.#minInclusive && number <= this.#maxInclusive);
  }

  #isNumber(value) {
    return typeof value === 'number';
  }
}
