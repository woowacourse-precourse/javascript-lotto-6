import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/LottoMsg.js';

class OutputView {
  async userCanBuy(amount) {
    Console.print(OUTPUT_MSG.USER_CAN_BUY_LOTTO(amount));
  }
}

export default OutputView;
