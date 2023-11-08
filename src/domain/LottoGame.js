import Lotto from "../model/Lotto.js";
import { Random } from '@woowacourse/mission-utils';

const ASC = (a, b) => a - b;

class LottoGame {

  /** @type {number} : 구매한 티켓 수량 */
  #purchaseQuantity = null;

  /** @type {Array<Lotto>} : 발행한 티켓 배열 */
  #tickets = [];

  /** @type {Array<number>} : 당첨 번호 배열 */
  #winningNumbers = null;

  /** @type {number} : 보너스 번호 */
  #bonusNumber = null;

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
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(ASC);
      this.#tickets.push(new Lotto(numbers));
    }
  }

  /** @returns {number} 티켓 구입 수량 */
  getPurchaseQuantity() {
    return this.#purchaseQuantity;
  }

  /** @returns {Lotto} 구입한 티켓 */
  getTickets() {
    return this.#tickets;
  }

  /** @param {Array<number>} winningNumbers 당첨 번호 배열 */
  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  /** @returns {Array<number>} 당첨 번호 */
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  /** @param {number} bonusNumber 보너스 번호 */
  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  /** @returns {number} 당첨 번호 */
  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoGame;
