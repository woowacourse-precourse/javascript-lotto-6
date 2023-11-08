import { num } from '../Constants.js';

function validateBonusNumber(bonusNumberInput, winningNumbers) {
  const isWithinRange = Number(bonusNumberInput) <= num.LOTTO_UPPER_LIMIT;
  const isNumber = /^[1-9]\d*$/.test(bonusNumberInput);
  const isWithoutRecurrences = !winningNumbers.includes(Number(bonusNumberInput));

  if (isWithinRange && isNumber && isWithoutRecurrences) {
    return true;
  }

  return false;
}

export default validateBonusNumber;
