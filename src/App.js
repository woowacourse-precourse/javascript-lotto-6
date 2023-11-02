import { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE } from './constants/index.js';

import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #lotto;

  constructor() {
    this.#lotto;
  }

  async play() {
    // 1. (입력) 로또 구입 금액 입력
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);

    // 1.1. 1000원 단위로 로또 갯수 구하기
    const getTotalCount = (purchaseAmount) => {
      const unit = 1000;
      if (purchaseAmount % unit) throw new Error(ERROR_MESSAGE.INVALID_UNIT);
      return purchaseAmount / unit;
    };
    const totalCount = getTotalCount(purchaseAmount);

    // 2. (출력) 로또 구매 갯수 출력
    await Console.print(OUTPUT_MESSAGE.PURCHASE_CONFIRM(totalCount));

    // 3. (출력) 구매 갯수만큼 로또 번호 출력
    const lottoList = Lotto.getLottoList(totalCount);
    lottoList.forEach((lotto) => Console.print(lotto));

    // 4. (입력) 당첨 번호 6개 번호를 입력 받기
    const winningNumber = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    this.#lotto = new Lotto(winningNumber.split(',').map(Number));

    // 5. (입력) 보너스 번호 입력 받기
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);

    // 6. (출력) 당첨 내역 출력
    this.#lotto.compareWinningAndLotto(winningNumber, bonusNumber, lottoList);
  }
}

export default App;
