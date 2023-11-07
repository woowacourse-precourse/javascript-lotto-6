import { Console } from '@woowacourse/mission-utils';
import { MessageFormat } from '../../Lib/messageFormat.js';
import { calculateTicketCountFromAmount } from './utils.js';

class PurchaseAmount {
  constructor(lottoTickets) {
    this.lottoTickets = lottoTickets;
  }

  /**
   * 입력받은 금액으로 로또를 구매하고, 구매한 로또 티켓들을 반환합니다.
   * @param {number} purchaseAmount 로또 구입 금액
   * @returns {Array} 구매한 로또 티켓들
   */
  purchaseLotto(purchaseAmount) {
    const ticketCount = calculateTicketCountFromAmount(purchaseAmount);
    this.printPurchaseConfirm(ticketCount);

    return this.purchaseLottoTickets(ticketCount);
  }

  /**
   * 구매한 로또 티켓의 수를 출력합니다.
   * @param {number} ticketCount 구매한 로또 티켓의 수
   */
  printPurchaseConfirm(ticketCount) {
    Console.print(MessageFormat.purchaseConfirm(ticketCount));
  }

  /**
   * 지정된 수만큼 로또 티켓을 구매하고, 구매한 로또 티켓들을 출력합니다.
   * @param {number} ticketCount 구매할 로또 티켓의 수
   * @returns {Array} 구매한 로또 티켓들
   */
  purchaseLottoTickets(ticketCount) {
    const lottoTickets = this.lottoTickets.generateLottoTickets(ticketCount);
    this.printLottoTickets(lottoTickets);

    return lottoTickets;
  }

  printLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => this.printLottoTicket(ticket));
  }

  printLottoTicket(ticket) {
    Console.print(`[${ticket.join(', ')}]`);
  }
}
export default PurchaseAmount;
