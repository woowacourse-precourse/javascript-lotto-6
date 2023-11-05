import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../../utils/constants.js';

class OutputView {
  showLottoNumberListOutput(ticketNumber, lottoNumberListmessage) {
    Console.print(`${ticketNumber}${OUTPUT_MESSAGE.lottoTicketNumber}`);
    Console.print(lottoNumberListmessage);
  }
}

export default OutputView;
