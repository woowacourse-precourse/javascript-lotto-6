import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import TotalPrice from '../model/TotalPrice.js';

class LottoController {
  constructor() {
    // view
    this.input = new InputView();
    // this.output = new OutputView();

    // model
    this.totalPrice = new TotalPrice();

    this.lottoArr = [];
    this.winCountArr = [];
    this.sameNumCountArr = [];
  }

  checkWin(price, win, bonus, arr) {
    for (let i = 0; i < price / 1000; i += 1) {
      const lotto = arr[i].getLottoNumbers();
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
    for (let i = 3; i <= 7; i += 1) {
      const count = this.sameNumCountArr.reduce(
        (cnt, element) => cnt + (element === i),
        0,
      );
      arr.push(count);
    }
    // eslint-disable-next-line no-param-reassign
    [arr[3], arr[4]] = [arr[4], arr[3]];
  }

  async startLottery() {
    await this.input.getPrice();
    OutputView.printLotto(this.input.price, this.lottoArr);
    await this.input.getWinNum();
    await this.input.getBonusNum();
  }

  computeAndPrintWins() {
    this.checkWin(
      this.input.price,
      this.input.winNum,
      this.input.bonusNum,
      this.lottoArr,
    );
    this.getWinCountArr(this.winCountArr);
    OutputView.printWinCount(this.winCountArr);
    this.totalPrice.calculateTotalPrice(this.winCountArr);
    const returnRate = this.totalPrice.calculateReturnRate(this.input.price);
    OutputView.printReturnRate(returnRate);
  }
}

export default LottoController;
