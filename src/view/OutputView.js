import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Messages.js';

export default class OutputView {
  static printNewLine() {
    Console.print('');
  }

  static printLottoTickets(lottoTickets) {
    Console.print(lottoTickets.length + OUTPUT_MESSAGE.purchaseAmount);
    const START_SQUARE_BRACKET = '[';
    const CLOSE_SQUARE_BRACKET = ']';
    const COMMA_AND_SPACE = ', ';
    lottoTickets.forEach((lotto) => {
      Console.print(START_SQUARE_BRACKET + lotto.getNumbers().join(COMMA_AND_SPACE) + CLOSE_SQUARE_BRACKET);
    });

    OutputView.printNewLine();
  }
}
