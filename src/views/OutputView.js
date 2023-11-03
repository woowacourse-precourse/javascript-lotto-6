import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/LottoMsg.js';

class OutputView {
  userCanBuy(amount) {
    Console.print(OUTPUT_MSG.USER_CAN_BUY_LOTTO(amount));
  }

  userLottoNumber(numbers) {
    Console.print(OUTPUT_MSG.USER_LOTTO_NUMBER(numbers));
  }
}

export default OutputView;
