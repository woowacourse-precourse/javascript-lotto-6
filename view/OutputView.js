import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import InputView from './InputView.js';
import PromptMessage from '../constants/PromptMessage.js';

class OutputView {
  constructor() {
    this.input = new InputView();
    this.lottoCount = 0;
    this.lottoArr = [];
    this.lottoNumArr = [];
  }

  printLotto(price) {
    this.lottoCount = price / 1000;
    Console.print(PromptMessage.PRINT_PURCHASED_NUM(this.lottoCount));
    while (this.lottoCount > 0) {
      const lottoNumbers = Lotto.generateRandomLotto();
      Console.print(lottoNumbers.getNumbers());
      this.lottoArr.push(lottoNumbers);
      this.lottoCount -= 1;
    }
  }
}

export default OutputView;
