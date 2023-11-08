import Lotto from "../model/Lotto.js";
import { Random } from '@woowacourse/mission-utils';

const ASC = (a, b) => a - b;

// TODO: 상수화
const lotto_prize = [
  { match: 6, PRIZE: 2000000000 },
  { match: 5, bonusMatch: true, PRIZE: 30000000 },
  { match: 5, PRIZE: 1500000 },
  { match: 4, PRIZE: 50000 },
  { match: 3, PRIZE: 5000 },
]

class LottoGame {

  /** @type {number} : 구입 금액 */
  #purchaseAmount = null;

  /** @type {number} : 구매한 티켓 수량 */
  #purchaseQuantity = null;

  /** @type {Array<Lotto>} : 발행한 티켓 배열 */
  #tickets = [];

  /** @type {Array<number>} : 당첨 번호 배열 */
  #winningNumbers = null;

  /** @type {number} : 보너스 번호 */
  #bonusNumber = null;

  /** @type {number} : 수익률(%) */
  #earningsRate = null;

  calculatePurchaseQuantity() {
    // TODO: 상수 사용
    this.#purchaseQuantity = this.#purchaseAmount / 1000;
  }

  /** 랜덤 번호를 가진 로또 티켓을 구입 수량만큼 생성한다. */
  generateTickets() {
    for (let i = 0; i < this.#purchaseQuantity; i++) {
      // TODO: 상수 사용
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(ASC);
      this.#tickets.push(new Lotto(numbers));
    }
  }

  /** 각 티켓을 당첨번호와 비교하여 "일치개수", "보너스번호일치여부"를 계산한다. */
  evaluateTicketMatches() {
    this.#tickets.forEach((ticket) => {
      ticket.setMatch(this.#countMatchingNumbers(ticket));
      ticket.setBonusMatch(this.#hasBonusNumber(ticket));
    });
  }

  /**
   * 당첨 번호와 비교하여 일치하는 번호의 개수를 반환한다.
   * @param {Lotto} ticket 구매한 로또 티켓
   * @returns {number} 일치하는 번호의 개수
   */
  #countMatchingNumbers(ticket) {
    return this.#winningNumbers.filter((winningNumber) => {
      ticket.getNumbers().includes(winningNumber)
    }).length;
  }

  /**
   * 보너스 번호의 포함 여부를 반환한다.
   * @param {Lotto} ticket 구매한 로또 티켓
   * @returns {boolean} 보너스 번호의 포함 여부
   */
  #hasBonusNumber(ticket) {
    return ticket.getNumbers().includes(this.#bonusNumber);
  }


  #determinePrize(match, bonusMatch) {

  }

  /** @param {number} 구입 금액 */
  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
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
