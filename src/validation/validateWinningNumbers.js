function validateWinningNumbers(winningNumbersArray) {
  const isNumber = winningNumbersArray.every((item) => /^[1-9]\d*$/.test(item));
  const isNumberWithinRange = winningNumbersArray.every((item) => item <= 45);
  const isWithoutRecurrences =
    winningNumbersArray.length === [...new Set(winningNumbersArray)].length;
  const isRightLength = winningNumbersArray.length === 6;

  if (isNumber && isNumberWithinRange && isWithoutRecurrences && isRightLength) {
    return true;
  }

  return false;
}

export default validateWinningNumbers;
