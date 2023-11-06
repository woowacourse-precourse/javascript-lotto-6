import { Console } from '@woowacourse/mission-utils';
import ExceptionHandler from '../utils/ExceptionHandler.js';
import LottoTicketGenerator from './LottoTicketGenerator.js';
import MESSAGE from '../constants/message.js';
import { MessageFormat } from '../utils/messageFormat.js';
import { calcaulateTicketCountFromAmount } from '../utils/index.js';

class LottoPurchaseInput {
  /**
   * 입력받은 로또 구입 금액을 검증하고 반환합니다.
   * @returns {number} 검증된 로또 구입 금액
   */
  async inputPurchaseAmount() {
    const amount = await Console.readLineAsync(MESSAGE.input.PurchaseAmount);
    const validatedAmount = ExceptionHandler.validateAmount(amount);
    return validatedAmount;
  }

  /**
   * 입력받은 금액으로 로또를 구매하고, 구매한 로또 티켓들을 반환합니다.
   * @param {number} purchaseAmount 로또 구입 금액
   * @returns {Array} 구매한 로또 티켓들
   */
  purchaseLotto(purchaseAmount) {
    const ticketCount = calcaulateTicketCountFromAmount(purchaseAmount);
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
    const lottoTickets = LottoTicketGenerator.generateLottoTickets(ticketCount);
    lottoTickets.forEach((ticket) => this.printLottoTickets(ticket));

    return lottoTickets;
  }

  /**
   * Array 형태의 로또 티켓의 번호를 문자열로 조합하여 출력합니다.
   * @param {Array} ticket 로또 티켓
   */
  printLottoTickets(ticket) {
    Console.print(`[${ticket.join(', ')}]`);
  }
}
export default LottoPurchaseInput;
