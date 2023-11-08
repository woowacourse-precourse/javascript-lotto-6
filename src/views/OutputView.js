import { Console } from '@woowacourse/mission-utils';
import Messages from '../constants/Messages.js';

class OutputView {
  static printLottoCount(lottoCount) {
    return Console.print(`\n${lottoCount}${Messages.LOTTO_COUNT}`);
  };
  
}

export default OutputView;