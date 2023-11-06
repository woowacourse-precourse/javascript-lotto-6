import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OTHERS } from '../../utils/constants.js';

class OutputView {
  showLottoNumberListOutput(ticketNumber, lottoNumberListmessage) {
    Console.print(`${OTHERS.lineBreak}${ticketNumber}${OUTPUT_MESSAGE.lottoTicketNumber}`);
    Console.print(lottoNumberListmessage);
  }

  showGameResultOutput() {}
}

export default OutputView;
