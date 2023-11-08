import { LOTTO_RANGE_REGEX } from '../constants.js';

export default function checkNumbersRange(numbers) {
  return numbers.every((item) => LOTTO_RANGE_REGEX.test(item));
}
