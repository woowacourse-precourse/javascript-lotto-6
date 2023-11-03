import Query from './View/Query';

class LottoGame {
  #tickets
  async game() {
    const purchaseAmount = await Query.getPurchaseAmount();
    const ticketCount = LottoGame.validatePurchaseAmount(purchaseAmount);
    this.#puchaseLottos(ticketCount)
  }

  static validatePurchaseAmount(purchaseAmount = '0') {
    if (
      Number.isNaN(Number(purchaseAmount)) ||
      Number(purchaseAmount) % 1000 !== 0 ||
      Number(purchaseAmount) < 1000
    ) {
      throw new Error('[ERROR] 구입 금액이 잘못 입력되었습니다.');
    }
    return Number(purchaseAmount) / 1000
  }
  #puchaseLottos(ticketCount = 0){
    this.#tickets = [];
    for(let i = 0; i<ticketCount; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#tickets.push(new Lotto(numbers));
    }
  }
}

export default LottoGame;
