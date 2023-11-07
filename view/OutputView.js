import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import PromptMessage from '../constants/PromptMessage.js';
import LottoController from '../controller/LottoController.js';
import Label from '../constants/Label.js';

class OutputView {
  constructor() {
    this.input = new InputView();
  }

  printLotto(price, arr) {
    let lottoCount = price / 1000;
    Console.print(PromptMessage.PRINT_PURCHASED_NUM(lottoCount));
    while (lottoCount > 0) {
      LottoController.generateAndStoreLotto(arr);
      const lottoNumbers = arr[arr.length - 1];
      Console.print(`[${lottoNumbers.getNumbers().join(', ')}]`);
      lottoCount -= 1;
    }
  }

  printWinCount(arr) {
    Console.print(PromptMessage.PRINT_STATISTICS);
    for (let i = 0; i < arr.length; i++) {
      Console.print(
        `${Label.WIN_COUNT_LABELS[i]} (${Label.PRICE_AMOUNT[
          i
        ].toLocaleString()}원) - ${arr[i]}개`,
      );
    }
  }

  printReturnRate(returnRate) {
    Console.print(PromptMessage.PRINT_RETURN_RATE(returnRate));
  }
}

export default OutputView;
