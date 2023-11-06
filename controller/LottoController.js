import Lotto from '../model/Lotto.js';
import InputView from '../view/InputView.js';
import Label from '../constants/Label.js';

class LottoController {
  constructor() {
    this.input = new InputView();
    this.sameNumCountArr = [];
    this.totalPrice = 0;
  }

  generateAndStoreLotto(arr) {
    const lottoNumbers = Lotto.generateRandomLotto();
    arr.push(lottoNumbers);
  }

  checkWin(price, win, bonus, arr) {
    for (let i = 0; i < price / 1000; i++) {
      const lotto = arr[i].getNumbers();
      const sameNumArr = lotto.filter((num) => win.includes(num));
      if (sameNumArr.length === 5) {
        this.checkIsBonus(lotto, bonus);
      } else {
        this.sameNumCountArr.push(sameNumArr.length);
      }
    }
  }

  checkIsBonus(arr, bonus) {
    if (arr.includes(bonus)) {
      this.sameNumCountArr.push(7);
    } else {
      this.sameNumCountArr.push(5);
    }
  }

  getWinCountArr(arr) {
    for (let i = 3; i <= 7; i++) {
      const count = this.sameNumCountArr.reduce(
        (cnt, element) => cnt + (element === i),
        0,
      );
      arr.push(count);
    }
    [arr[3], arr[4]] = [arr[4], arr[3]];
  }

  calculateReturnRate(arr, price) {
    for (let i = 0; i < arr.length; i++) {
      this.totalPrice += arr[i] * Label.PRICE_AMOUNT[i];
    }
    const returnRate = (100 * (this.totalPrice / price)).toFixed(1);
    return returnRate;
  }
}

export default LottoController;
