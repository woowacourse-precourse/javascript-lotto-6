import Lotto from "../model/Lotto.js";
import { Random } from '@woowacourse/mission-utils';
import { LOTTO_GAME_OPTIONS as OPT } from "../constant/Options.js";

const ASC = (a, b) => a - b;

// TODO: 상수화
const prize_conditions = [
  { rank: 1, match: 6 },
  { rank: 2, match: 5, bonusMatch: true },
  { rank: 3, match: 5 },
  { rank: 4, match: 4 },
  { rank: 5, match: 3 }
];

const prize_amount = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  0: 0
}

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

  /** @type {object} : 등수 별 당첨 수 */
  #prizeStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  /** @type {number} : 총 당첨금액 */
  #totalPrizeAmount = 0;

  /** @type {number} : 수익률(%) */
  #earningsRate = null;

  /** 구입 금액에 따른 구입 가능 수량을 계산하여 저장한다. */
  calculatePurchaseQuantity() {
    this.#purchaseQuantity = this.#purchaseAmount / OPT.price;
  }

  /** 랜덤 번호를 가진 로또 티켓을 구입 수량만큼 생성한다. */
  generateTickets() {
    //TEST:
    this.#tickets.push(new Lotto([1, 2, 3, 4, 5, 6]));
    this.#tickets.push(new Lotto([1, 2, 3, 4, 5, 7]));
    this.#tickets.push(new Lotto([1, 2, 3, 4, 5, 8]));
    this.#tickets.push(new Lotto([1, 2, 3, 4, 8, 8]));
    this.#tickets.push(new Lotto([1, 2, 3, 8, 8, 8]));
    this.#tickets.push(new Lotto([1, 2, 8, 8, 8, 8]));
    // for (let i = 0; i < this.#purchaseQuantity; i++) {
    //   const numbers = Random.pickUniqueNumbersInRange(
    //     OPT.min_number, OPT.max_number, lotto_number_count
    //   ).sort(ASC);
    //   this.#tickets.push(new Lotto(numbers));
  }

  /** 각 티켓을 당첨번호와 비교하여 당청 등수를 계산한다. */
  evaluateTickets() {
    this.#tickets.forEach((ticket) => {
      ticket.setMatch(this.#countMatchingNumbers(ticket));
      ticket.setBonusMatch(this.#hasBonusNumber(ticket));
      ticket.setPrizeRank(this.#determinePrizeRank(ticket));
      this.#prizeStats[ticket.getPrizeRank()] += 1;
    });
  }

  /**
   * 당첨 번호와 비교하여 일치하는 번호의 개수를 반환한다.
   * @param {Lotto} ticket 구매한 로또 티켓
   * @returns {number} 일치하는 번호의 개수
   */
  #countMatchingNumbers(ticket) {
    return this.#winningNumbers.filter((winningNumber) => {
      return ticket.getNumbers().includes(winningNumber)
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

  /**
   * 티켓의 당첨 등수를 계산하여 반환한다.
   * @param {Lotto} ticket 구입한 로또 티켓
   * @returns {number} 당첨 등수 (0 : 낙첨)
   */
  #determinePrizeRank(ticket) {
    for (const prize of prize_conditions) {
      if (this.#isPrizeMatch(ticket, prize)) {
        return prize.rank;
      }
    }
    return 0;
  }

  /**
   * 특정 등수에 대한 티켓의 당첨 여부를 반환한다.
   * @param {Lotto} ticket 로또 티켓
   * @param {} prize 당첨 기준
   * @returns 
   */
  #isPrizeMatch(ticket, prize) {
    const numberMatchs = ticket.getMatch() === prize.match;
    const bonusMatch = prize.bonusMatch === true ? ticket.getBonusMatch() : true;
    return numberMatchs && bonusMatch;
  }

  /** 총 당첨 금액을 계산한다. */
  calculateTotalPrizeAmount() {
    let totalPrizeAmount = 0;
    this.#tickets.forEach((ticket) => {
      totalPrizeAmount += prize_amount[ticket.getPrizeRank()];
    });
    this.#totalPrizeAmount = totalPrizeAmount
  }

  /** 수익률을 계산한다. */
  calculateEarningsRate() {
    this.#earningsRate = 100 * this.#totalPrizeAmount / this.#purchaseAmount;
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

  getPrizeStats() {
    return this.#prizeStats;
  }

  getEarningsRate() {
    return this.#earningsRate;
  }
}

export default LottoGame;
