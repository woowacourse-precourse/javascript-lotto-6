import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import InputView from '../view/InputView.js';
import PromptMessage from '../constants/PromptMessage.js';
import CountLabel from '../constants/Label.js';

class LottoController {
  constructor() {
    this.input = new InputView();
    this.lottoCount = 0;
    this.lottoArr = []; // [ Lotto{}, Lotto{} ]
    this.sameNumCountArr = [];

    this.winCountArr = [];
    this.totalPrice = 0;
  }

  printLotto(price) {
    this.lottoCount = price / 1000;
    Console.print(PromptMessage.PRINT_PURCHASED_NUM(this.lottoCount));
    while (this.lottoCount > 0) {
      const lottoNumbers = Lotto.generateRandomLotto();
      Console.print(`[${lottoNumbers.getNumbers().join(', ')}]`);
      this.lottoArr.push(lottoNumbers);
      this.lottoCount -= 1;
    }
  }
}

export default LottoController;
