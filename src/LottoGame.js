import Query from './View/Query';

class LottoGame {
  async game() {
    const purchaseAmount = await Query.getPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);
  }

  static validatePurchaseAmount(purchaseAmount = '0') {
    if (
      Number.isNaN(Number(purchaseAmount)) ||
      Number(purchaseAmount) % 1000 !== 0 ||
      Number(purchaseAmount) < 1000
    ) {
      throw new Error('[ERROR] 구입 금액이 잘못 입력되었습니다.');
    }
  }
}

export default LottoGame;
