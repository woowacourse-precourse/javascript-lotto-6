import { Console } from '@woowacourse/mission-utils';

import LottoBudget from './LottoBudget.js';
import LottoPurchase from './LottoPurchase.js';
import LottoDraw from './LottoDraw.js';
import LottoResult from './LottoResult.js';

import Lotto from './Lotto.js';
import DefaultWinningLotto from './DefaultWinningLotto.js';
import BonusWinningLotto from './BonusWinningLotto.js';


export const MIN_LOTTO_NUMBER = 1;
export const MAX_LOTTO_NUMBER = 10;
export const LOTTO_PRICE = 1000;

class App {
  async play() {
    const LOTTO_BUDGET = new LottoBudget(MIN_LOTTO_NUMBER,MAX_LOTTO_NUMBER,LOTTO_PRICE);
    await LOTTO_BUDGET.getInput();

    const LOTTO_PURCHASE = new LottoPurchase(LOTTO_BUDGET.LOTTO_NUMBER);
    await LOTTO_PURCHASE.showPurchaseResult();

    const LOTTO_DRAW = new LottoDraw();
    await LOTTO_DRAW.getWinningNumbers();

    const LOTTO_RESULT = new LottoResult(
      LOTTO_DRAW.DEFAULT_WINNING_LOTTO,
      LOTTO_DRAW.BONUS_WINNING_LOTTO,
      LOTTO_PURCHASE.GENERATED_LOTTOS,
      LOTTO_BUDGET.lottoBudget
      );
    await LOTTO_RESULT.showLottoResult();
  }
}
export default App;
