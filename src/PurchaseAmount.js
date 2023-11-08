const CURRENCY_UNIT = 1000;

class PurchaseAmount {
  amount;

  constructor(amount) {
    this.validateAskPurchaseAmount(Number(amount));
    this.amount = Number(amount);
  }

  validateAskPurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount) || purchaseAmount === 0) {
      throw new Error('[ERROR] 입력된 값을 확인해주세요.');
    }

    if (purchaseAmount % CURRENCY_UNIT) {
      throw new Error('[ERROR] 1,000원 단위로 입력해주세요.');
    }
  }

  getPurchaseAmount() {
    return this.amount;
  }
}

export default PurchaseAmount;
