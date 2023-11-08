function validatePurchaseAmount(purchaseAmountInput) {
  if (/^[1-9]\d*000$/.test(purchaseAmountInput)) {
    return true;
  }

  return false;
}

export default validatePurchaseAmount;
