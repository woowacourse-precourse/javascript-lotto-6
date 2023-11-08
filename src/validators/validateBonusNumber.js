import ERROR_MESSAGES from '../constants/ErrorMessages.js';

export default function validateBonusNumber(bonusNumberInput, lotteryArray) {
  if (bonusNumberInput < 1 || 45 < bonusNumberInput) {
    throw new Error(ERROR_MESSAGES.invalidBonusNumber);
  }
  if (lotteryArray.includes(bonusNumberInput)) {
    throw new Error(ERROR_MESSAGES.duplicatedBonusNumber);
  }
}
