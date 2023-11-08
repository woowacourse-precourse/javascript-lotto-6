import { Console } from '@woowacourse/mission-utils';
import {
  PROMPT_BUY_LOTTO,
  formatLottoCountMessage,
  formatPurchasedLottos,
  PROMPT_INPUT_WINNING_NUMBER,
  PROMPT_GENERATE_BONUS_NUM,
} from '../constants';

class LottoView {
  readPrice() {
    return Console.readLineAsync(PROMPT_BUY_LOTTO);
  }

  displayLottoCount(count) {
    Console.print(formatLottoCountMessage(count));
  }

  displayLottos(lottos) {
    lottos.forEach(lotto =>
      Console.print(formatPurchasedLottos(lotto.getNumbers())),
    );
  }

  readWinningNumbers() {
    return Console.readLineAsync(PROMPT_INPUT_WINNING_NUMBER);
  }

  readBonusNumber() {
    return Console.readLineAsync(PROMPT_GENERATE_BONUS_NUM);
  }

  displayOutcomeMessages(outcomeMessage, returnMessage) {
    Console.print(outcomeMessage);
    Console.print(returnMessage);
  }

  displayError(message) {
    Console.print(message);
  }
}

export default LottoView;
