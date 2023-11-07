function validateBonusNumber(bonusNumberInput, winningNumbers) {
  if (!/^[1-9]\d*$/.test(bonusNumberInput) || Number(bonusNumberInput) > 45) {
    return false;
  }

  if (winningNumbers.includes(Number(bonusNumberInput))) {
    return false;
  }

  return true;
}

export default validateBonusNumber;

console.log(validateBonusNumber('3', [1, 2, 3, 4, 5, 6]));
