import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constants/PromptMessage.js';
import LottoConstants from '../constants/LottoConstants.js';
import Lotto from '../Lotto.js';

class OutputView {
  static printLotto(price, arr) {
    let lottoCount = price / 1000;
    Console.print(PromptMessage.PRINT_PURCHASED_NUM(lottoCount));
    while (lottoCount > 0) {
      Lotto.generateAndStoreLotto(arr);
      const lottoNumbers = arr[arr.length - 1];
      Console.print(`[${lottoNumbers.getLottoNumbers().join(', ')}]`);
      lottoCount -= 1;
    }
  }

  static printWinCount(arr) {
    Console.print(PromptMessage.PRINT_STATISTICS);
    for (let i = 0; i < arr.length; i += 1) {
      Console.print(
        `${LottoConstants.WIN_COUNT_LABELS[i]} (${LottoConstants.PRICE_AMOUNT[
          i
        ].toLocaleString()}원) - ${arr[i]}개`,
      );
    }
  }

  static printReturnRate(returnRate) {
    Console.print(PromptMessage.PRINT_RETURN_RATE(returnRate));
  }
}

export default OutputView;
