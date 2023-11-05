function isValidLottoAmountInput(amount) {
  if (isNaN(amount) || amount % 1000 !== 0) {
    return false;
  }

  return true;
}

export { isValidLottoAmountInput };
