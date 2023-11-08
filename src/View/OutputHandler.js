import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Lib/message.js';
import { MessageFormat } from '../Lib/messageFormat.js';

class OutputHandler {
  static print(message) {
    Console.print(message);
  }

  static printError(error) {
    this.print(error.message);
  }

  static printPurchaseConfirm(ticketCount) {
    this.print(MessageFormat.purchaseConfirm(ticketCount));
  }

  static printLottoTicket(ticket) {
    this.print(MessageFormat.ticketResult(ticket));
  }

  static printResultHeader() {
    this.print(MESSAGE.output.resultHeader);
  }

  static printTotalResult(key, result) {
    this.print(MessageFormat.resultRow(key, result));
  }

  static printTotalReturnRate(totalReturnRate) {
    this.print(MessageFormat.totalReturnRate(totalReturnRate));
  }
}

export default OutputHandler;
