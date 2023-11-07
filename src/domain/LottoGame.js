class LottoGame {

  /** @type {number} : 구매한 티켓 수량 */
  #purchaseQuantity = null;

  /**
   * 구입금액에 따라 구입 가능한 티켓의 개수를 계산하여 저장한다.
   * @param {number} purchaseAmount 구입금액
   */
  setPurchaseQuantityFromAmount(purchaseAmount) {
    // TODO: 상수 사용
    this.#purchaseQuantity = purchaseAmount / 1000;
  }
}

export default LottoGame;
