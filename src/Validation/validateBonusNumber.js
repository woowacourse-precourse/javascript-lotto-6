function validateBonusNumber(bonusNumberInput, winningNumbers) {
  if (!/^[1-9]\d*$/.test(bonusNumberInput) || Number(bonusNumberInput) > 45) {
    return false;
  }

  if (winningNumbers.includes(bonusNumberInput)) {
    return false;
  }

  return true;
}

export default validateBonusNumber;
