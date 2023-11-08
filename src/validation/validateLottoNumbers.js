import { num } from '../Constants.js';

function validateLottoNumbers(numbers) {
  const isWithinRange = numbers.every(
    (item) => item >= num.LOTTO_LOWER_LIMIT && item <= num.LOTTO_UPPER_LIMIT
  );

  const isRightLength = numbers.length === 6;

  const isWithoutRecurrences = numbers.length === [...new Set(numbers)].length;

  if (isWithinRange && isRightLength && isWithoutRecurrences) {
    return true;
  }

  return false;
}

export default validateLottoNumbers;
