import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoUtill from '../utils/LottoUtill.js';
import Lotto from '../models/Lotto.js';
import { CONSTANTS } from '../constants/constant.js';

class LottoController {
  #USER_MONEY;

  #WIN_NUMBER;

  #BONUS_NUMBER;

  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
  }

  async inputPurchaseMoney() {
    this.#USER_MONEY = await this.INPUT_VIEW.purchaseMoney();
    if (this.#USER_MONEY === CONSTANTS.IS_ERROR) {
      return this.inputPurchaseMoney();
    }
    return this.#buyLotto();
  }

  async #buyLotto() {
    const CALC_BUY = new LottoUtill(this.#USER_MONEY);
    await this.#printLottoNumber(CALC_BUY.howManyToBuy());
  }

  async #printLottoNumber(canBuy) {
    this.OUTPUT_VIEW.userCanBuy(canBuy);
    await this.#lottoGenerator(canBuy);
    await this.inputWinNumber();
  }

  async #lottoGenerator(canBuy) {
    if (canBuy > 0) {
      const generateNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoNumber = await Lotto.createLottoInstance(generateNumber);
      this.OUTPUT_VIEW.userLottoNumber(lottoNumber.sortingNumber());
      await this.#lottoGenerator(canBuy - 1);
    }
  }

  async inputWinNumber() {
    const winLotteryNumber = await this.INPUT_VIEW.winLotteryNumber();
    try {
      const winNumber = await Lotto.createLottoInstance(winLotteryNumber);
      this.#WIN_NUMBER = winNumber.getWinNumber();
      return this.inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
      return this.inputWinNumber();
    }
  }

  async inputBonusNumber() {
    this.#BONUS_NUMBER = await this.INPUT_VIEW.bonusNumber();
    if (this.#BONUS_NUMBER === CONSTANTS.IS_ERROR) {
      return this.inputBonusNumber();
    }
    return this.printStatistic();
  }

  async printStatistic() {
    console.log(this.#USER_MONEY, this.#WIN_NUMBER, this.#BONUS_NUMBER);
  }
}

export default LottoController;
