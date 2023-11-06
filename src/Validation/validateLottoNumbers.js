import { num } from '../Constants.js';

function validateLottoNumbers(numbers) {
  const isWithinRange = numbers.every(
    (item) => item >= num.LOTTO_LOWER_LIMIT && item <= num.LOTTO_UPPER_LIMIT
  );

  if (isWithinRange) {
    return true;
  }

  return false;
}

export default validateLottoNumbers;
