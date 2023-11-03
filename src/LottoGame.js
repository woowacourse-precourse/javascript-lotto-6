import Lotto from './Lotto';
import Query from './View/Query';
import Print from './View/Print';
import { Console, Random } from '@woowacourse/mission-utils';
class LottoGame {
  #tickets
  async start() {
    const purchaseAmount = await Query.getPurchaseAmount();
    const ticketCount = LottoGame.validatePurchaseAmount(purchaseAmount);
    this.#puchaseLottos(ticketCount);
    Print.printTickets([...this.#tickets]);
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
