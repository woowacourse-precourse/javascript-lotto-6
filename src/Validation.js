export function validatePurchasingAmount(amount, INPUT_ERROR_MESSAGE) {
  const checkValidNumber = Number(amount);

  if (isNaN(checkValidNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
  }
  if (checkValidNumber % 1000 !== 0) {
    throw new Error(INPUT_ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
  }
  return checkValidNumber;
}

export function validateWinningNumbers(
  winningNumbers,
  SYMBOL,
  INPUT_ERROR_MESSAGE,
) {
  const splitWinningNumbers = winningNumbers.split(SYMBOL);

  if (splitWinningNumbers.length !== 6) {
    throw new Error(INPUT_ERROR_MESSAGE.WINNING_NUMBERS_ERROR);
  }

  splitWinningNumbers.sort((a, b) => a - b);

  const validatedWinningNumbers = splitWinningNumbers.map(num => {
    const checkValidWinningNumbers = Number(num);
    if (isNaN(checkValidWinningNumbers)) {
      throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    }
    return checkValidWinningNumbers;
  });

  return validatedWinningNumbers;
}

export function validateBonusNumber(
  bonusNumber,
  winningNumbers,
  INPUT_ERROR_MESSAGE,
) {
  const checkValidateNumber = Number(bonusNumber);
  if (isNaN(checkValidateNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
  }
  if (winningNumbers.includes(checkValidateNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
  }
  return checkValidateNumber;
}
