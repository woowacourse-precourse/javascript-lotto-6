import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/LottoMsg.js';

class OutputView {
  userCanBuy(amount) {
    Console.print(OUTPUT_MSG.userCanBuyLotto(amount));
  }

  userLottoNumber(numbers) {
    Console.print(OUTPUT_MSG.userLottoNumber(numbers));
  }

  lottoStatic(staticObject) {
    Console.print(OUTPUT_MSG.LOTTO_STATIC_OUT);
    Console.print(OUTPUT_MSG.userLottoResult(staticObject));
  }
}

export default OutputView;
