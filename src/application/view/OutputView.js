import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OTHERS } from '../../utils/constants.js';

class OutputView {
  showLottoNumberListOutput(ticketNumber, lottoNumberListmessage) {
    Console.print(`${OTHERS.lineBreak}${ticketNumber}${OUTPUT_MESSAGE.lottoTicketNumber}`);
    Console.print(lottoNumberListmessage);
  }

  showGameResultOutput(gameResultMessage) {
    Console.print(OUTPUT_MESSAGE.result);
    Console.print(gameResultMessage[0]);
    Console.print(
      `${OUTPUT_MESSAGE.returnRate1} ${gameResultMessage[1]}${OTHERS.percent}${OUTPUT_MESSAGE.returnRate2}`
    );
  }
}

export default OutputView;
