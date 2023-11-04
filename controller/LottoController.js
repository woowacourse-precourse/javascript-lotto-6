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

  checkWin(price, win, bonus) {
    for (let i = 0; i < price / 1000; i++) {
      const lotto = this.lottoArr[i].getNumbers();
      const sameNumArr = lotto.filter((num) => win.includes(num));
      if (sameNumArr.length === 5) {
        this.checkIsBonus(lotto, bonus);
      } else {
        this.sameNumCountArr.push(sameNumArr.length);
      }
    }
    // Console.print(this.sameNumCountArr);
  }

  checkIsBonus(arr, bonus) {
    if (arr.includes(bonus)) {
      this.sameNumCountArr.push(7);
    } else {
      this.sameNumCountArr.push(5);
    }
  }

  getWinCountArr() {
    for (let i = 3; i <= 7; i++) {
      const count = this.sameNumCountArr.reduce(
        (cnt, element) => cnt + (element === i),
        0,
      );
      this.winCountArr.push(count);
    }
    [this.winCountArr[3], this.winCountArr[4]] = [
      this.winCountArr[4],
      this.winCountArr[3],
    ];
    // Console.print(this.winCountArr);
  }
}

export default LottoController;
