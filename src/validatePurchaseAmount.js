function validatePurchaseAmount(purchaseAmount) {
  const minAmount = 1000;

  if (!Number.isInteger(purchaseAmount)) {
      throw new Error("[ERROR] 구입 금액은 정수만 가능합니다.");
  }

  if (purchaseAmount <= 0) {
      throw new Error("[ERROR] 구입 금액은 0보다 커야 합니다.");
  }

  if (purchaseAmount % minAmount !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.");
  }

  return purchaseAmount;
}

export default validatePurchaseAmount;
