import { num } from '../Constants';

function validateLottoNumbers(numbers) {
  const isWithinRange = numbers.every(
    (item) => item >= num.LOTTO_LOWER_LIMIT && item <= num.LOTTO_UPPER_LIMIT
  );

  if (isBetween1And45) {
    return true;
  }

  return false;
}

export default validateLottoNumbers;
