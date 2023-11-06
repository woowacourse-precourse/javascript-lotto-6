import { num } from '../Constants';

function validateLottoNumbers(numbers) {
  const isBetween1And45 = numbers.every((item) => item >= 1 && item <= 45);

  if (isBetween1And45) {
    return true;
  }

  return false;
}

export default validateLottoNumbers;
