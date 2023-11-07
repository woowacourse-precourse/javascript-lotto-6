import Lotto from "../model/Lotto.js";
import { Random } from '@woowacourse/mission-utils';

const ASC = (a, b) => a - b;

class LottoGame {

  /** @type {number} : 구매한 티켓 수량 */
  #purchaseQuantity = null;

  /** @type {Array<Lotto>} : 발행한 티켓 리스트 */
  #tickets = [];

  /**
   * 구입금액에 따라 구입 가능한 티켓의 개수를 계산하여 저장한다.
   * @param {number} purchaseAmount 구입금액
   */
  setPurchaseQuantityFromAmount(purchaseAmount) {
    // TODO: 상수 사용
    this.#purchaseQuantity = purchaseAmount / 1000;
  }

  /** 랜덤 번호를 가진 로또 티켓을 구입 수량만큼 생성한다. */
  generateTickets() {
    for (let i = 0; i < this.#purchaseQuantity; i++) {
      // TODO: 상수 사용
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(ASC);
      this.#tickets.push(new Lotto(numbers));
    }

    // TEST: 생성된 티켓들의 로또번호 출력
    this.#tickets.forEach((ticket) => {
      console.log(ticket.getNumbers());
    })
  }

  /** @returns {number} 티켓 구입 수량 */
  getPurchaseQuantity() {
    return this.#purchaseQuantity;
  }
}

export default LottoGame;
