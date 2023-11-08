import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import TotalPrice from '../model/TotalPrice.js';
import Constants from '../constants/LottoConstants.js';

class LottoController {
  constructor() {
    // view
    this.input = new InputView();

    // model
    this.totalPrice = new TotalPrice();

    this.lottoArr = [];
    this.winCountArr = [];
    this.matchNumCountArr = [];
  }

  checkWin(price, win, bonus, arr) {
    const lottoCount = price / Constants.PRICE_PER_LOTTO;
    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = arr[i].getLottoNumbers();
      const matchNumArr = lotto.filter((num) => win.includes(num));
      if (matchNumArr.length === Constants.MATCH_FOR_BONUS) {
        this.checkIsBonus(lotto, bonus);
      } else {
        this.matchNumCountArr.push(matchNumArr.length);
      }
    }
  }

  checkIsBonus(arr, bonus) {
    const matchCount = arr.includes(bonus)
      ? Constants.BONUS_MATCH
      : Constants.STANDARD_MATCH;
    this.matchNumCountArr.push(matchCount);
  }

  getWinCountArr(arr) {
    for (let i = Constants.MINIMUM_MATCH; i <= Constants.BONUS_MATCH; i += 1) {
      const count = this.matchNumCountArr.reduce(
        (cnt, element) => cnt + (element === i),
        0,
      );
      arr.push(count);
    }
    // eslint-disable-next-line no-param-reassign
    [arr[Constants.POSITION_SIX_MATCH], arr[Constants.POSITION_BONUS_MATCH]] = [
      arr[Constants.POSITION_BONUS_MATCH],
      arr[Constants.POSITION_SIX_MATCH],
    ];
  }

  async getInputAndPrintLotto() {
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
