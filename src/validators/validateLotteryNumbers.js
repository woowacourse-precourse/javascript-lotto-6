import CONDITIONS from '../constants/Conditions.js';
import ERROR_MESSAGES from '../constants/ErrorMessages.js';

export default function validateLotteryNumbers(lotteryNumbersInput) {
  if (lotteryNumbersInput.length !== CONDITIONS.lotteryLength) {
    throw new Error(ERROR_MESSAGES.incorrectLottoLength);
  }
  if (new Set(lotteryNumbersInput).size !== lotteryNumbersInput.length) {
    throw new Error(ERROR_MESSAGES.duplicatedLottoNumber);
  }
  if (
    !lotteryNumbersInput.every(
      (lotteryNumber) => 1 <= lotteryNumber && lotteryNumber <= 45,
    )
  ) {
    throw new Error(ERROR_MESSAGES.invalidLottoNumberRange);
  }
}
