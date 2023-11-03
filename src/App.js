import { ERROR_MESSAGE, INPUT_MESSAGE, NEW_LINE, OUTPUT_MESSAGE } from './constants/index.js';

import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #lotto;

  async play() {
    // 1. (입력) 로또 구입 금액 입력
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);

    if (!/^\d+$/.test(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.HEADER_PREFIX);
    }

    // 1.1. 1000원 단위로 로또 갯수 구하기
    const getTotalCount = (purchaseAmount) => {
      const unit = 1000;
      if (purchaseAmount % unit) throw new Error(ERROR_MESSAGE.INVALID_UNIT);
      return purchaseAmount / unit;
    };
    const totalCount = getTotalCount(purchaseAmount);

    // 2. (출력) 로또 구매 갯수 출력
    Console.print(OUTPUT_MESSAGE.PURCHASE_CONFIRM(totalCount));

    // 3. (출력) 구매 갯수만큼 로또 번호 출력
    const lottoTickets = Lotto.generateLottoTickets(totalCount);
    lottoTickets.forEach((ticket) => Console.print(`[${ticket.join(', ')}]`));

    // 4. (입력) 당첨 번호 6개 번호를 입력 받기
    // 5. (입력) 보너스 번호 입력 받기
    const userNumbers = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);

    const userLotto = {
      userNumbers,
      bonusNumber: bonusNumber,
    };

    this.#lotto = new Lotto(userLotto.userNumbers.split(',').map(Number));

    // 6. (출력) 당첨 내역 출력
    this.#lotto.printCompareWinningAndLotto();
    const result = this.#lotto.compareWinningAndLotto(userLotto, lottoTickets);
    this.#lotto.printTotalResult();

    // 수익률
    this.#lotto.calculateReturnRate(purchaseAmount);
  }
}

export default App;
