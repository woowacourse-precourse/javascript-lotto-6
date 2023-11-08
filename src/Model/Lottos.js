class Lottos {
  #lottoTickets;

  #lottoQuantity;

  constructor() {
    this.#lottoTickets = [];
  }

  calculateLottoQuantity(purchaseAmount) {
    this.validateAmount(purchaseAmount);
    this.#lottoQuantity = purchaseAmount / 1000;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!Number.isInteger(purchaseAmount)) {
      throw new Error("[ERROR] 1000원 단위의 정수인 숫자를 입력해 주세요.");
    }
    if (purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 유효한 구매 금액을 입력하세요.");
    }
  }
}
