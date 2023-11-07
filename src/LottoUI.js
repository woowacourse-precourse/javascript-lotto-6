import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoUI {
  async output() {
    while (true) {
      try {
        const NUMBERS = await Console.readLineAsync(
          '\n당첨 번호를 입력해 주세요.\n'
        );
        const LOTTO = new Lotto(NUMBERS.split(','));
        const WINNING_NUMBERS = LOTTO.winningNumbers();

        return WINNING_NUMBERS;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default LottoUI;
