function validateBonusNumber(bonusNumberInput) {
  if (!/^[1-9]\d*$/.test(bonusNumberInput) || Number(bonusNumberInput) > 45) {
    return false;
  }

  if (bonusNumberInput.length === 0) {
    return false;
  }

  return true;
}

export default validateBonusNumber;
